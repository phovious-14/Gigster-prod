import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import Footer from "@/components/_navbar/Footer";
import Navbar from "@/components/_navbar/Navbar";

export default function BecomeHunter() {
    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center items-center">
                <div className="w-[600px] flex justify-center items-center flex-col rounded-xl">
                    <span className="text-slate-800 text-xl font-bold text-center p-2">Welcome to Move club</span>
                    <form className="flex justify-center items-start flex-col shadow-md mt-4 w-full p-6">
                        <div className="flex justify-between items-center flex-row w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Name</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Name' />
                            </FormControl>
                            <FormControl isRequired className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>Unique name</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='Unique name' />
                            </FormControl>
                        </div>
                        <div className="flex justify-between items-center flex-row mt-4 w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Portfoliio Link</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://protfolio.com' />
                            </FormControl>
                            <FormControl className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>Twitter</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://x.com/xyz' />
                            </FormControl>
                        </div>
                        <div className="flex justify-between items-center flex-row mt-4 w-full">
                            <FormControl isRequired className="mr-2">
                                <FormLabel style={{ fontSize: '15px' }}>Github</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://github.com/xyz' />
                            </FormControl>
                            <FormControl className="ml-2">
                                <FormLabel style={{ fontSize: '15px' }}>LinkedIn</FormLabel>
                                <Input style={{ fontSize: '14px' }} placeholder='https://linkedin.com/xyz' />
                            </FormControl>
                        </div>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Work at</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Work at' />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Your location</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Your location' />
                        </FormControl>
                        <FormControl isRequired className="mt-4">
                            <FormLabel style={{ fontSize: '15px' }}>Short bio</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Your short bio' />
                        </FormControl>
                        <button className="text-lg p-3 text-white bg-slate-800 rounded-lg w-full mt-6">Create Hunter</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}