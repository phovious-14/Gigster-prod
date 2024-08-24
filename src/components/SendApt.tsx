"use client"
import { Network, Provider } from "aptos";
import {
    useWallet,
    InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";

export const provider = new Provider(Network.TESTNET);

export default function SendApt() {

    const { account, signAndSubmitTransaction }: any = useWallet();
    const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);
    const [transferAmount, setTransferAmount] = useState<string>("0");
    const [accountBalance, setAccountBalance] = useState<number>(0);
    const APTOS_COIN = "0x1::aptos_coin::AptosCoin";

    const aptsend = async () => {

        if (!account) return [];
        setTransactionInProgress(true);
        const TRANSFER_AMOUNT = 0.5 * 100_000_000;
        const receiver = "0x67ac972cc8bcb9b23d7799e9fd02c084f4caad584947a1baebe91391f01be9f1";

        const payload: InputTransactionData = {
            data: {
                function: "0x1::coin::transfer",
                typeArguments: [APTOS_COIN],
                functionArguments: [receiver, TRANSFER_AMOUNT.toString()],
            },
        };

        try {
            // sign and submit transaction to chain
            const response = await signAndSubmitTransaction(payload);
            // wait for transaction
            await provider.waitForTransaction(response.hash);
        } catch (error: any) {
            console.log(error);
        } finally {
            setTransactionInProgress(false);
        }

    };

    const fetchAccountBalance = async () => {
        if (!account) return;
        try {
          const balanceResource = await provider.getAccountResource(
            account.address,
            "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
          );
          const balance = parseInt((balanceResource.data as any).coin.value, 10);
          setAccountBalance(balance / 100_000_000); // Convert to APT
        } catch (error: any) {
          console.log(error);
        }
      };

    useEffect(() => {
    
        fetchAccountBalance();
      }, [account?.address]);

    return (
        <>
            <button onClick={aptsend}>send apt</button>
        </>
    )
}