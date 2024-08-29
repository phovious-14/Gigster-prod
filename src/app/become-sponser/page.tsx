"use client"

import { useEffect, useState } from "react";
import Footer from "@/components/_navbar/Footer";
import Navbar from "@/components/_navbar/Navbar";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useToast } from '@chakra-ui/react'

export default function BecomeSponser() {
    const { account } = useWallet()
    const router = useRouter()
    const [formData, setFormData] = useState<any>({
        companyName: '',
        companyUsername: '',
        companyUrl: '',
        twitterUrl: '',
        industry: '',
        bio: '',
        walletAddress: ''
    });
    const toast = useToast()
console.log("account ", account);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(account === null) {
            toast({
                title: 'Wallet connection required.',
                description: "You need to connect aptos wallet",
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
              return
        }

        try {
            formData.walletAddress = account?.address
            const response = await fetch('https://gigster-backend-ztso.onrender.com/api/create_sponser_profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                
                toast({
                    title: 'You have become sponser now',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                router.push('/dashboard')
            } else {
                alert('Failed to create sponsor profile');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-full mt-24 flex justify-center items-center">
                <div className="w-[600px] flex justify-center items-center flex-col rounded-xl">
                    <span className="text-slate-800 text-xl font-bold text-center p-2">Welcome to Move club</span>
                    <form onSubmit={handleSubmit} className="flex justify-center items-start flex-col shadow-md mt-4 w-full p-6">
                        <div className="flex justify-between items-center flex-row w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Company name</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Company name' name="companyName" value={formData.companyName} onChange={handleChange} />
                            </FormControl>
                            <FormControl isRequired className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>Company username</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Company username' name="companyUsername" value={formData.companyUsername} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <div className="flex justify-between items-center flex-row mt-4 w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Company url</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Company url' name="companyUrl" value={formData.companyUrl} onChange={handleChange} />
                            </FormControl>
                            <FormControl isRequired className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>Twitter url</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Twitter url' name="twitterUrl" value={formData.twitterUrl} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <p style={{ fontSize: '15px' }} className="mt-4 mb-2">Industry</p>
                        <Select placeholder='Select option' style={{ fontSize: '15px' }} name="industry" value={formData.industry} onChange={handleChange}>
                            <option value='DAOs'>DAOs</option>
                            <option value='Infrastructure'>Infrastructure</option>
                            <option value='DePIN'>DePIN</option>
                            <option value='DeFi'>DeFi</option>
                            <option value='Consumer dApps'>Consumer dApps</option>
                            <option value='Wallets and Payments'>Wallets and Payments</option>
                            <option value='NFTs'>NFTs</option>
                            <option value='Gaming'>Gaming</option>
                        </Select>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Company short bio</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Company short bio' name="bio" value={formData.bio} onChange={handleChange} />
                        </FormControl>
                        <button type="submit" className="text-lg p-3 text-white bg-slate-800 rounded-lg w-full mt-6">Create Sponsor</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}