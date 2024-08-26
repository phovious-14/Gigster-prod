import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

export default function BecomeSponser() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[600px] flex justify-center items-center flex-col rounded-xl">
                <span className="text-slate-800 text-xl font-bold text-center p-2">Welcome to Move club</span>
                <form className="flex justify-center items-start flex-col shadow-md mt-4 w-full p-6">
                    <div className="flex justify-between items-center flex-row w-full">
                        <FormControl isRequired className="mr-2">
                            <FormLabel style={{ fontSize: '15px' }}>Company name</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Company name' />
                        </FormControl>
                        <FormControl isRequired className="ml-2">
                            <FormLabel style={{ fontSize: '15px' }}>Company username</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Company username' />
                        </FormControl>
                    </div>
                    <div className="flex justify-between items-center flex-row mt-4 w-full">
                        <FormControl isRequired className="mr-2">
                            <FormLabel style={{ fontSize: '15px' }}>Company url</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Company url' />
                        </FormControl>
                        <FormControl isRequired className="ml-2">
                            <FormLabel style={{ fontSize: '15px' }}>Twitter url</FormLabel>
                            <Input style={{ fontSize: '14px' }} placeholder='Twitter url' />
                        </FormControl>
                    </div>
                    {/* <input type="file" /> */}
                    <p style={{ fontSize: '15px' }} className="mt-4 mb-2">Industry</p>
                    <Select placeholder='Select option' style={{ fontSize: '15px' }}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <FormControl isRequired className="mt-4">
                        <FormLabel style={{ fontSize: '15px' }}>Company short bio</FormLabel>
                        <Input style={{ fontSize: '14px' }} placeholder='Company short bio' />
                    </FormControl>
                    <button className="text-lg p-3 text-white bg-slate-800 rounded-lg w-full mt-6">Create Sponser</button>
                </form>
            </div>
        </div>
    )
}