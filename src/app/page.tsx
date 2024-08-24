// pages/index.js
"use client"
import Head from 'next/head'
import './globals.css'
import { supabase } from '@/utils/supabase'
import { useEffect } from 'react'

export default function Home() {
  const addName = async () => {
    try {
      const { data, error } = await supabase
        .from('basic_detail')  // Replace 'names' with your actual table name
        .insert({ name: "krishn" })
        console.log(data);        
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    addName()
  }, [])

  return (
    <div className="min-h-screen ">
      {/* <Head>
        <title>Aptos Bounty Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        {/* Hero Section */}
        <section className=" text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl mb-12">Bridging Talent and Opportunity in the Aptos Ecosystem</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
                Become a Sponsor
              </button>
              <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300">
                Become a Hunter
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Dedicated Aptos Platform", description: "Centralized location for Aptos ecosystem bounties" },
                { title: "Keyless Integration", description: "Seamless onboarding with keyless account support" },
                { title: "Secure P2P Transfers", description: "Safe and efficient fund transfers between users" },
                { title: "Fiat On/Off Ramps", description: "Easy conversion between fiat and crypto" }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">For Sponsors</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Centralized bounty listing</li>
                  <li>Access to skilled contributors</li>
                  <li>Streamlined bounty management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">For Hunters</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Easy opportunity discovery</li>
                  <li>Reputation building</li>
                  <li>Simplified onboarding and payments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to revolutionize the Aptos ecosystem?</h2>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
                Become a Sponsor
              </button>
              <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300">
                Become a Hunter
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Aptos Bounty Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}