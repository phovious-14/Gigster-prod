"use client"

import { useState } from "react";

import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';

export default function CreateGig() {
    const [activeTab, setActiveTab] = useState('Bounty');
    const [markdown, setMarkdown] = useState('');
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <div className="w-[600px] flex justify-center items-center flex-col rounded-xl">
                    <span className="text-slate-800 text-xl font-bold text-center p-2">Gigster</span>
                    <form className="flex justify-center items-start flex-col shadow-md mt-4 w-full p-6">
                        <FormControl isRequired className="">
                            <FormLabel style={{ fontSize: '15px' }}>Headline of bounty</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Headline of bounty' />
                        </FormControl>
                        <p style={{ fontSize: '15px' }} className="mt-4 mb-2">Choose Gig category <span className="text-red-500">*</span> </p>
                        <Select placeholder='Select option' isRequired style={{ fontSize: '15px' }}>
                            <option value='option1'>Bounty</option>
                            <option value='option2'>Opportunity</option>
                            <option value='option3'>Freelance</option>
                        </Select>
                        <p style={{ fontSize: '15px' }} className="mt-4 mb-2">Choose Gig type <span className="text-red-500">*</span></p>
                        <Select placeholder='Select option' isRequired style={{ fontSize: '15px' }}>
                            <option value='option1'>Contest</option>
                            <option value='option2'>Event</option>
                            <option value='option3'>Tech</option>
                        </Select>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Budget</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Budget' />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>About Gig</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='About your bounty' />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Developer Instructions</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Developer Instructions' />
                        </FormControl>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4 ">Judging criteria (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    value={markdown}
                                    onChange={(e) => setMarkdown(e.target.value)}
                                    placeholder="Judging criteria here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div>
                        </div>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4">Reward Distribution (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    value={markdown}
                                    onChange={(e) => setMarkdown(e.target.value)}
                                    placeholder="Reward Distribution here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div>
                        </div>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4">Submission requirements (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    value={markdown}
                                    onChange={(e) => setMarkdown(e.target.value)}
                                    placeholder="Submission requirements here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div>
                        </div>
                        
                        <p style={{ fontSize: '15px' }} className="mt-4 ">Resource (markdown) <span className="text-red-400 ">*</span></p>
                        <div className="w-full">
                            <div className="editor">
                                <textarea
                                    value={markdown}
                                    onChange={(e) => setMarkdown(e.target.value)}
                                    placeholder="Resource here..."
                                    className="w-full outline-none border-[1px] border-slate-200 rounded-md p-2 h-[100px]"
                                />
                            </div>
                            <div className="preview">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div>
                        </div>
                        
                        <button className="text-lg p-3 text-white bg-slate-800 rounded-lg w-full mt-6">Create Gig</button>
                    </form>
                </div>
            </div>
        </>
    )
}