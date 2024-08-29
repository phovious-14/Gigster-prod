import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Button, useToast } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { Network, Provider } from "aptos";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

export const provider = new Provider(Network.TESTNET);

export default function DistributeBounty({ bountyId, winnerList }: any) {

    const { account, signAndSubmitTransaction } = useWallet();
    const [amt1, setAmt1] = useState<any>("")
    const [amt2, setAmt2] = useState<any>("")
    const [amt3, setAmt3] = useState<any>("")
    const [rewardStatus, setRewardStatus] = useState<any>(false)
    const toast = useToast()
    const router = useRouter()
    const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);

    const APTOS_COIN = "0x1::aptos_coin::AptosCoin";

    const aptsend = async () => {

        if (!account) return router.push('/');
        setTransactionInProgress(true);

        try {
            const recipients = winnerList.map((winner: any) => winner.walletAddress)
            console.log(recipients);

            const amounts = [(parseFloat(amt1) * 100_000_000).toString(), (parseFloat(amt2) * 100_000_000).toString(), (parseFloat(amt3) * 100_000_000).toString()]
            console.log(amounts);

            // build a transaction payload to be submited
            const payload: InputTransactionData = {
                data: {
                    function: "0x1::aptos_account::batch_transfer",
                    typeArguments: [],
                    functionArguments: [recipients, amounts],
                },
            };

            // sign and submit transaction to chain
            const response = await signAndSubmitTransaction(payload);
            // wait for transaction
            await provider.waitForTransaction(response.hash);

            // await fetchAccountBalance();

            const response2 = await fetch(`http://localhost:4000/api/add_reward_distribution/${bountyId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response2.ok) {

                //alert
                toast({
                    title: 'All transactions have been successfully sent! ✔️',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            }

        } catch (error: any) {
            console.log(error);
        } finally {
            setTransactionInProgress(false);
        }
    };

    const fetchRewardStatus = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/checkRewardDistributed/${bountyId}`);
            if (response.ok) {
                const data: any = await response.json()
                console.log("projects", data);

                setRewardStatus(data)
            } else {
                alert('Failed to create sponsor profile');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form');
        }
    }

    useEffect(() => {
        fetchRewardStatus()
    }, [])

    return (
        <>
            {
                rewardStatus
                    ? <div className='flex justify-center items-centermb-6 p-4 bg-slate-100 rounded-lg'>
                        <h2 className="text-xl font-bold mb-2">Reward Distributed!</h2>
                    </div>
                    : <div className="flex justify-center items-center flex-col w-[90%] p-4 rounded-lg m-auto shadow-md">
                        <div className="flex justify-center gap-4 items-start flex-row w-full m-4">
                            <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724739104/Untitled_design_6_pl8foc.png'} alt="" width={30} height={30} />

                            <FormControl className="">
                                <FormLabel style={{ fontSize: '15px' }}>{winnerList[0]?.submissionTitle}</FormLabel>
                                <span className='text-sm text-slate-400'>{winnerList[0]?.walletAddress}</span>
                                <Input style={{ fontSize: '14px' }} placeholder='APT Amount' onChange={(e: any) => setAmt1(e.target.value)} />
                            </FormControl>
                        </div>
                        <div className="flex justify-center gap-4 items-start flex-row w-full m-4">
                            <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724739104/Untitled_design_7_ycdoan.png'} alt="" width={30} height={30} />

                            <FormControl className="">
                                <FormLabel style={{ fontSize: '15px' }}>{winnerList[1]?.submissionTitle}</FormLabel>
                                <span className='text-sm text-slate-400'>{winnerList[1]?.walletAddress}</span>
                                <Input style={{ fontSize: '14px' }} placeholder='APT Amount' onChange={(e: any) => setAmt2(e.target.value)} />
                            </FormControl>
                        </div>
                        <div className="flex justify-center gap-4 items-start flex-row w-full m-4">
                            <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724739104/Untitled_design_8_xgqct9.png'} alt="" width={30} height={30} />

                            <FormControl className="">
                                <FormLabel style={{ fontSize: '15px' }}>{winnerList[2]?.submissionTitle}</FormLabel>
                                <span className='text-sm text-slate-400'>{winnerList[2]?.walletAddress}</span>
                                <Input style={{ fontSize: '14px' }} placeholder='APT Amount' onChange={(e: any) => setAmt3(e.target.value)} />
                            </FormControl>
                        </div>

                        <button className="relative rounded-3xl cursor-pointer py-4 w-[100%]" onClick={aptsend}>
                            <div className="flex items-center justify-center bg-slate-800  rounded-lg p-2">
                                <h3

                                    className="flex cursor-pointer gap-2 items-center text-whitr text-center text-sm font-medium"
                                >
                                    <p className="text-base text-white">Distribute 🚀</p>
                                </h3>
                            </div>
                        </button>

                    </div>
            }
        </>
    )
}