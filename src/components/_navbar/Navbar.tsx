'use client';
import Link from 'next/link';
import React from 'react';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from 'next/image';
import { WalletSelector } from '../WalletSelector';

const Navbar = () => {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white fixed top-0 z-10">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link href="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                <Image src={'https://res.cloudinary.com/dm6aa7jlg/image/upload/v1724954954/Twitter_profile_gigster_ymobek.png'} alt='' height={50} width={50} />
                {/* <span className="text-indigo-600">.</span> */}
              </span>
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link href="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Home
              </Link>

              <a href="#" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Feature Gigs
              </a>
              <a href="#" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Contibutor
              </a>
              <Link href="/get-in-touch" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                Get In Touch
              </Link>
            </nav>
          </div>
          <WalletSelector  />
        </div>
      </section>
    </>
  );
};

export default Navbar;
