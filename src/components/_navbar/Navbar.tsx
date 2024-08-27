'use client';
import Link from 'next/link';
import React from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const Navbar = () => {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link href="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                Move club
                <span className="text-indigo-600">.</span>
              </span>
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link href="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Home
              </Link>

              <Link href="/list-project" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Feature Gigs
              </Link>
              <Link href="/profile" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Contibutor
              </Link>
            </nav>
          </div>
          <WalletSelector />
        </div>
      </section>
    </>
  );
};

export default Navbar;
