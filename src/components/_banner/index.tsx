'use client';
import { useUser } from '@/context/UserContext';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Banner = () => {

  const { account } = useWallet()
  const { userType, setUserType }: any = useUser();
  const route = useRouter()

  const fetchUserType = async () => {

    if(account === null) return
    
    try {
      const response = await fetch(`https://gigster-backend-ztso.onrender.com/api/find_usertype/${account?.address}`);
      if (response.ok) {
        const data = await response.json()   
        setUserType(data.userType)
        route.push('/dashboard')
      } else {
        alert('Failed to create sponsor profile');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
    
  }

  useEffect(() => {
    fetchUserType()
  }, [account])

  return (
    <section className="px-2 py-20 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap justify-center items-start sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 font  sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                <span className="block xl:inline">
                  Unlock Your{' '}
                  <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-black via-blue-700 to-blue-900 lg:inline">
                    Potential
                  </span>{' '}
                  in the Aptos Universe
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md font-mono lg:text-xl md:max-w-3xl">
                {'>'}_ Contribute. _Grow. _Earn.
              </p>
              <section className="bg-white ">
                <div className="py-4">
                  <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3  dark:text-gray-400">
                    <p className="text-base font-bold  tracking-tight leading-tight text-center text-grey">On your favorite chains</p>
                    <a href="#" className="flex justify-center items-center">
                      <Image src={'data:image/png;base64,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'} alt="" width={50} height={50} className="flex-shrink-0 rounded-full" />
                      <p className="px-2 font-bold">APTOS</p>
                    </a>
                  </div>
                </div>
              </section>

              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  href="/become-sponser"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-black  bg-gradient-to-r from-black via-black to-blue-900 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Become Sponser
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link
                  href="/become-hunter"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-black  bg-gradient-to-l from-black via-black to-blue-900 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Become Hunter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full flex justify-start items-center flex-col h-[calc(100%_-100px)] overflow-x-hidden p-1 overflow-y-auto container2">
              <div className="bg-[#ffffff] w-full flex justify-start items-start flex-row p-3 rounded-lg shadow-md m-1">
                <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={50} height={50} alt="" />
                <div className="flex justify-center items-start flex-col ml-4">
                  <h1 className="text-slate-800 text-base">Bounty name</h1>
                  <div className="flex mt-1 ml-4 text-base text-gray-500 font-extralight">
                    <div className="text-slate-400 text-sm flex -ml-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="#94A3B8" d="M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11m-3.615 9v-1H11.5v-3.754q-1.321-.236-2.312-1.105T7.823 11.99q-1.586-.187-2.705-1.301T4 8V7q0-.402.299-.701T5 6h2.654V4h8.692v2H19q.402 0 .701.299T20 7v1q0 1.573-1.118 2.688t-2.705 1.3q-.373 1.285-1.364 2.153T12.5 15.246V19h3.115v1zm-.731-9.084V7H5v1q0 1.142.762 1.963t1.892.953M12 14.269q1.385 0 2.346-.961q.962-.962.962-2.347V5H8.692v5.962q0 1.384.962 2.346q.961.961 2.346.961m4.346-3.354q1.131-.132 1.892-.952T19 8V7h-2.654zM12 9.636" /></svg>
                      <span className="ml-1">Bounty</span>
                    </div>
                    <div className="text-slate-400 ml-2">|</div>
                    <div className="text-slate-400 text-sm flex ml-2 mt-[2px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#94A3B8" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z" /></svg>
                      <span className="ml-1">3 day left</span>
                    </div>
                    <div className="text-slate-400 ml-2">|</div>
                    <div className="text-slate-400 text-sm flex ml-3 mt-[2px] justify-start items-center">
                      <div className="bg-green-400 w-2 h-2 rounded-full pulse-green"></div>
                      <span className="ml-2">Live</span>
                    </div>
                  </div>
                  <div className="flex justify-evenly gap-4 items-center text-sm text-gray-500 font-light mt-2">
                    <span>🥇 50 APT</span>
                    <span>🥈 30 APT</span>
                    <span>🥉 20 APT</span>
                  </div>
                </div>
                <div className="flex justify-end flex-row items-center flex-grow ">
                  <Image src={"https://tse1.mm.bing.net/th?id=OIP.bHrShAEKhWrUzdP3v8a5CQHaHb&pid=Api&P=0&h=180"} className="rounded-full" width={20} height={20} alt="" />
                  <span className="text-lg text-slate-800 ml-4 mr-2">100</span>
                  <span className="text-slate-400 text-base"> APT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
