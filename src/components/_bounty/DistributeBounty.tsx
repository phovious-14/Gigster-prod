import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Button } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import { useRouter } from "next/router";
import { Network, Provider } from "aptos";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

export const provider = new Provider(Network.TESTNET);

export default function DistributeBounty() {

    const { account, signAndSubmitTransaction } = useWallet();
    const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);
    const [reload, setReload] = useState<number>(0);

    const APTOS_COIN = "0x1::aptos_coin::AptosCoin";

    const aptsend = async () => {
        console.log('apt');

        if (!account) return [];
        setTransactionInProgress(true);

        try {
            const recipients = ["0x80e65e6c30603b8986fa066a8328f0f20b97d4240efb62982aef385dc78ad6c8", "0x41bf4c7365459de3a3912f2faaf0220eca0d0d859735a371dca1a2bbc979b0a6"];
            // const amounts = transfers.map((transfer) =>
            //     (parseFloat(transfer.amount) * 100_000_000).toString()
            // );
            const amounts = [(parseFloat("0.1") * 100_000_000).toString(), (parseFloat("0.1") * 100_000_000).toString()]

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

            //alert
            alert("All transactions have been successfully sent!");
        } catch (error: any) {
            console.log(error);
        } finally {
            setTransactionInProgress(false);
        }
    };

    return (
        <div className="flex justify-center items-center flex-col w-[60%] p-4 rounded-lg m-auto shadow-md">
            <div className="flex justify-center gap-4 items-start flex-row w-full m-4">
                <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724739104/Untitled_design_6_pl8foc.png'} alt="" width={30} height={30} />

                <FormControl className="">
                    <FormLabel style={{ fontSize: '15px' }}>xyz bounty</FormLabel>
                    <Input style={{ fontSize: '14px' }} placeholder='APT Amount' />
                </FormControl>
            </div>
            <div className="flex justify-center gap-4 items-start flex-row w-full m-4">
                <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724739104/Untitled_design_7_ycdoan.png'} alt="" width={30} height={30} />

                <FormControl className="">
                    <FormLabel style={{ fontSize: '15px' }}>xyz bounty</FormLabel>
                    <Input style={{ fontSize: '14px' }} placeholder='APT Amount' />
                </FormControl>
            </div>
            <div className="flex justify-center gap-4 items-start flex-row w-full m-4">
                <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724739104/Untitled_design_8_xgqct9.png'} alt="" width={30} height={30} />

                <FormControl className="">
                    <FormLabel style={{ fontSize: '15px' }}>xyz bounty</FormLabel>
                    <Input style={{ fontSize: '14px' }} placeholder='APT Amount' />
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
    )
}