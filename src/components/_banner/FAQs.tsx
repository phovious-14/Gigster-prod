"use client"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export default function FAQs() {
    return (
        <div id='faqs' className='w-screen h-screen flex justify-center items-center flex-col mt-24'>
            <h1 className='text-3xl text-slate-800 text-center '>FAQs</h1>
            <div className='w-[60%] h-full mt-16'>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' padding={4}>
                                    What is this platform?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding={4}>
                            Our platform is a unified solution for managing freelancing gigs and bounties. It allows project owners to post tasks and securely transfer funds to freelancers upon completion.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' padding={4}>
                                    Why does the platform use the Aptos blockchain?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding={4}>
                            Aptos offers superior speed and scalability compared to many other blockchain networks, allowing for faster transactions and a better user experience, especially for a mass consumer base.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' padding={4}>
                                    How is this different from other bounty platforms?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding={4}>
                            We leverage the Aptos blockchain for faster, more secure transactions. Our platform also includes built-in task verification and transparent reward distribution, ensuring efficiency and trust for both project owners and freelancers.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' padding={4}>
                                    How do I fund a job or bounty?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding={4}>
                            After creating an account, navigate to the Creeate Gig section. Fill in the details of your task, including description, required skills, deadline, and reward amount. Once submitted, your bounty/job will be visible to potential freelancers/hunters.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' padding={4}>
                                    How do I find jobs or bounties?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding={4}>
                            After creating your hunter profile, you can browse available jobs/bounties in the dashboard section. Use filters to find tasks that match your skills and interests.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left' padding={4}>
                                    How do I get paid?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding={4}>
                            Once you complete a task and its verified by the project owner, the reward is transferred by bounty owner to your Aptos wallet address associated with your account.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}