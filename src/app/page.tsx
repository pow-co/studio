'use client'

import { useState } from 'react'



export default function Home() {
  const [tabSelected, setTabSelected] = useState(0) 
  return (
    <div className='grid grid-cols-12 h-screen'>
      <div className='flex flex-col px-5 justify-center col-span-3 bg-gray-950'>
        <div className='py-5 flex'>
          <h1 className='text-3xl font-bold'>PowCo</h1>
          <p className='ml-1 text-2xl font-semibold bg-gradient-to-r from-green-500 via-violet-500 to-blue-500 text-transparent bg-clip-text'>Studio</p>
        </div>
        <div className='py-5'>
          <div className='flex'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <div className=''>
              <h3>Nfts</h3>
              <p>1/1s & editions</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
              </svg>
            </div>
            <div className=''>
              <h3>Drops</h3>
              <p>Generative & Airdrops</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <div className=''>
              <h3>Mint Pages</h3>
              <p>Sell your NFTs</p>
            </div>
          </div>
        </div>
        <div className='grow'/>
        <div></div>
      </div>
      <div className='col-span-9'>
        <div className='bg-gray-900 flex justify-end h-16 items-center px-5'>
          <div className='py-2 px-4 border border-white rounded-lg cursor-pointer hover:opacity-80'>Connect Wallet</div>
        </div>
        <div className='my-10 px-5'>
          <h1 className='text-3xl font-bold'>NFTs</h1>
          <div className='flex justify-between py-5 border-b border-gray-100/20'>
            <div className='flex bg-gray-950 '>
              <div onClick={() => setTabSelected(0)} className={`py-2 px-4 rounded-l-lg cursor-pointer hover:bg-gray-900 ${tabSelected === 0 && "bg-gray-800"}`}>1/1s</div>
              <div onClick={() => setTabSelected(1)} className={`py-2 px-4 cursor-pointer hover:bg-gray-900 ${tabSelected === 1 && "bg-gray-800"}`}>Limited Editions</div>
              <div onClick={() => setTabSelected(2)} className={`py-2 px-4 cursor-pointer hover:bg-gray-900 ${tabSelected === 2 && "bg-gray-800"}`}>Open Editions</div>
              <div onClick={() => setTabSelected(3)} className={`py-2 px-4 rounded-r-lg cursor-pointer hover:bg-gray-900 ${tabSelected === 3 && "bg-gray-800"}`}>Collection NFTs</div>
            </div>
            <div className='flex rounded-lg py-2 px-4 bg-white text-black cursor-pointer hover:opacity-80'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
              <p className='ml-2'>Create</p>
            </div>
          </div>
          <div className='flex flex-col text-center mt-5 p-20 border border-gray-100/20 rounded-lg'>
            <h2 className='text-2xl font-bold py-2'>You do not have any NFT of this type</h2>
            <p className='text-white/80 mb-5'>To get started you’ll need your prepared assets, we’ll help guide you along your way.</p>
            <div className='rounded-lg mx-auto py-2 px-4 bg-white text-black cursor-pointer hover:opacity-80'>
              Create
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
