
"use client"

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from 'react';
import "./globals.css";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { Network } from "aptos";

const wallets = [new PetraWallet()];

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Bounties",
//   description: "Listing of bounties",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', width: '100vw', position: 'relative' }}>
        <AptosWalletAdapterProvider
          plugins={wallets}
          autoConnect={false}
          dappConfig={{ network: Network.TESTNET, aptosConnectDappId: "dapp-id" }}
        >

          <div id="boxCloud"
            style={{
              position: 'fixed',
              left: `${position.x - 200}px`,
              top: `${position.y - 200}px`,
              width: '450px',
              height: '450px',
              backgroundColor: 'cyan',
              borderRadius: '50%',
            }}></div>
          <div className="container">
            <div className={montserrat.className}>
              {children}
            </div>
          </div>
        </AptosWalletAdapterProvider>
      </body>
    </html>
  );
}
