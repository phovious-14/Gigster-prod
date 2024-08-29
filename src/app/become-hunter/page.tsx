"use client"

import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Footer from "@/components/_navbar/Footer";
import Navbar from "@/components/_navbar/Navbar";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useToast } from '@chakra-ui/react'
import { useState } from "react";

export default function BecomeHunter() {

    const { account } = useWallet()
    const router = useRouter()
    const [formData, setFormData] = useState<any>({
        name: '',
        uniqueName: '',
        portfolio: '',
        github: '',
        linkedin: '',
        twitter: '',
        bio: '',
        workAt: '',
        location: '',
        walletAddress: ''
    });
    const toast = useToast()
    const [loading, setLoading] = useState<Boolean>(false)
    console.log("account ", account);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (account === null) {
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

            setLoading(true)
            formData.walletAddress = account?.address
            const response = await fetch(`http://localhost:4000/api/create_hunter_profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                toast({
                    title: 'You have become hunter now',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                setLoading(false)
                router.push('/dashboard')
            } else {
                toast({
                    title: 'Error while creating your profile',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center items-center">
                <div className="w-[600px] flex justify-center items-center flex-col rounded-xl">
                    <span className="text-slate-800 text-xl font-bold text-center p-2">Welcome to Move club</span>
                    <form className="flex justify-center items-start flex-col shadow-md mt-4 w-full p-6" onSubmit={handleSubmit}>
                        <div className="flex justify-between items-center flex-row w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Name</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Name' name="name" value={formData.name} onChange={handleChange} />
                            </FormControl>
                            <FormControl isRequired className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>Unique name</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Unique name' name="uniqueName" value={formData.uniqueName} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <div className="flex justify-between items-center flex-row mt-4 w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Portfoliio Link</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://protfolio.com' name="portfolio" value={formData.portfolio} onChange={handleChange} />
                            </FormControl>
                            <FormControl className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>Twitter</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://x.com/xyz' name="twitter" value={formData.twitter} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <div className="flex justify-between items-center flex-row mt-4 w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Github</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://github.com/xyz' name="github" value={formData.github} onChange={handleChange} />
                            </FormControl>
                            <FormControl className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>LinkedIn</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://linkedin.com/xyz' name="linkedin" value={formData.linkedin} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Work at</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Work at' name="workAt" value={formData.workAt} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Your location</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Your location' name="location" value={formData.location} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Short bio</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Your short bio' name="bio" value={formData.bio} onChange={handleChange} />
                        </FormControl>
                        {loading ? <Button
                            loadingText='Creating'
                            colorScheme='gray'
                            variant='outline'
                            className="text-lg p-3 rounded-lg w-full mt-6"
                        >
                            Submit
                        </Button>
                            : <button type="submit" className="text-lg p-3 text-white bg-slate-800 rounded-lg w-full mt-6">Create Hunter</button>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}