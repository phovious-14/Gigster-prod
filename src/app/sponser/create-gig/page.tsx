"use client"

import { useState } from "react";

import { FormControl, FormLabel, Input, Select, useToast } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useRouter } from "next/navigation";

export default function CreateGig() {
    
    const { account } = useWallet()
    const router = useRouter()
    const [formData, setFormData] = useState<any>({
        about: '',
        title: '',
        category: '',
        type: '',
        budget: '',
        devInstructions: '',
        rewardDistribution: '',
        judgingCriteria: '',
        resources: '',
        startAt: '',
        endAt: '',
        walletAddress: ''
    });
    const toast = useToast()

    const handleChange = (e: any) => {
        console.log(formData);
        
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
            const response = await fetch('http://localhost:4000/api/create_bounty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                
                toast({
                    title: 'You have created bounty',
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
            <div className="w-full flex justify-center items-center">
                <div className="w-[600px] flex justify-center items-center flex-col rounded-xl">
                    <span className="text-slate-800 text-xl font-bold text-center p-2">Gigster</span>
                    <form className="flex justify-center items-start flex-col shadow-md mt-4 w-full p-6" onSubmit={handleSubmit}>
                        <FormControl isRequired className="">
                            <FormLabel style={{ fontSize: '15px' }}>Headline of bounty</FormLabel>
                            <Input style={{ fontSize: '14px' }} name="title" value={formData.title} onChange={handleChange} placeholder='Headline of bounty' />
                        </FormControl>
                        <p style={{ fontSize: '15px' }} className="mt-4 mb-2">Choose Gig category <span className="text-red-500">*</span> </p>
                        <Select placeholder='Select option' isRequired style={{ fontSize: '15px' }} name="category" value={formData.category} onChange={handleChange}>
                            <option value='Bounty'>Bounty</option>
                            <option value='Opportunity'>Opportunity</option>
                            <option value='Freelance'>Freelance</option>
                        </Select>
                        <p style={{ fontSize: '15px' }} className="mt-4 mb-2">Choose Gig type <span className="text-red-500">*</span></p>
                        <Select placeholder='Select option' isRequired style={{ fontSize: '15px' }} name="type" value={formData.type} onChange={handleChange}>
                            <option value='Contest'>Contest</option>
                            <option value='Event'>Event</option>
                            <option value='Tech'>Tech</option>
                        </Select>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Budget</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Budget' name="budget" value={formData.budget} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>About Gig</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='About your bounty' name="about" value={formData.about} onChange={handleChange} />
                        </FormControl>
                        <div className="flex justify-between items-center flex-row w-full mt-4">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Starting At</FormLabel>
                                <Input style={{ fontSize: '14px' }} type="datetime-local" name="startAt" value={formData.startAt} onChange={handleChange} />
                            </FormControl>
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Ending At</FormLabel>
                                <Input style={{ fontSize: '14px' }} type="datetime-local" name="endAt" value={formData.endAt} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Developer Instructions</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Developer Instructions' name="devInstructions" value={formData.devInstructions} onChange={handleChange} />
                        </FormControl>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4 ">Judging criteria (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    // value={markdown}
                                    // onChange={(e) => setMarkdown(e.target.value)}
                                    name="judgingCriteria" value={formData.judgingCriteria} onChange={handleChange}
                                    placeholder="Judging criteria here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            {/* <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div> */}
                        </div>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4">Reward Distribution (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    // value={markdown}
                                    // onChange={(e) => setMarkdown(e.target.value)}
                                    name="rewardDistribution" value={formData.rewardDistribution} onChange={handleChange}
                                    placeholder="Reward Distribution here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            {/* <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div> */}
                        </div>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4">Submission requirements (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    // value={markdown}
                                    // onChange={(e) => setMarkdown(e.target.value)}
                                    name="submissionRequirement" value={formData.submissionRequirement} onChange={handleChange}
                                    placeholder="Submission requirements here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            {/* <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div> */}
                        </div>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4 ">Resource (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    // value={markdown}
                                    // onChange={(e) => setMarkdown(e.target.value)}
                                    name="resources" value={formData.resources} onChange={handleChange}
                                    placeholder="Resource here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            {/* <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div> */}
                        </div>
                        
                        <button type="submit" className="text-lg p-3 text-white bg-slate-800 rounded-lg w-full mt-6">Create Gig</button>
                    </form>
                </div>
            </div>
        </>
    )
}