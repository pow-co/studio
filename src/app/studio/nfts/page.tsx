'use client'

import Link from 'next/link'
import { useState } from 'react'



export default function Home() {
  const [tabSelected, setTabSelected] = useState(0) 
  return (
    <div className='grid grid-cols-12 h-screen bg-black text-white'>
      <div className='flex flex-col px-5 justify-center col-span-3 bg-stone-950'>
        <div className='py-5 flex items-baseline cursor-pointer select-none'>
          <h1 className='text-3xl font-bold'>PowCo</h1>
          <p className='ml-1 text-2xl font-semibold bg-gradient-to-r from-green-500 via-violet-500 to-blue-500 text-transparent bg-clip-text'>Studio</p>
        </div>
        <div className='py-5'>
          <div className={`cursor-pointer flex items-center bg-stone-700 rounded-lg px-3 py-1 mb-2 hover:bg-stone-800`}>
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hexagon-image" className="bg-none p-0 ml-1 mr-6 rounded-sm overflow-visible box-content text-stone-300 text-sm transition-all duration-250 ease-in w-4 h-4 inline-block shrink-0 leading-[1em] -align-[1.25em]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M17.1 220c-12.9 22.3-12.9 49.7 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36H344.3c25.7 0 49.5-13.7 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.7c-25.7 0-49.5 13.7-62.4 36L17.1 220zm141.2 59.8c4.5-4.9 10.8-7.7 17.4-7.8s13 2.6 17.6 7.4L232.2 320l71.6-86.2c4.6-5.5 11.3-8.7 18.5-8.7s13.9 3.2 18.5 8.7l72.6 87.4-55.2 95.7c-2.9 5-8.1 8-13.9 8l-176.6 0c-5.7 0-11-3-13.9-8l-46.8-81 51.2-56.1zM192 200c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"></path>
              </svg>
            </div>
            <div className=''>
              <h3 className='text-lg font-semibold'>Nfts</h3>
              <p className='text-sm opacity-30'>1/1s & editions</p>
            </div>
          </div>
          <div className={`cursor-pointer flex items-center rounded-lg px-3 py-1 mb-2 hover:bg-stone-800`}>
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="icons" className="bg-none p-0 ml-1 mr-6 rounded-sm overflow-visible box-content text-stone-300 text-sm transition-all duration-250 ease-in w-4 h-4 inline-block shrink-0 leading-[1em] -align-[1.25em]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M532.3 7.3C539.7 13.3 544 22.4 544 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L384 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM106.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L245.3 304H272c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48h26.7zM224 408c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM510.7 278.3L472.3 368H528c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L423.7 400H368c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L51.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z"></path>
              </svg>
            </div>
            <div className=''>
              <h3 className='text-lg font-semibold'>Drops</h3>
              <p className='text-sm opacity-30'>Generative & Airdrops</p>
            </div>
          </div>
          <div className={`cursor-pointer flex items-center rounded-lg px-3 py-1 mb-2 hover:bg-stone-800`}>
            <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table-layout" className="bg-none p-0 ml-1 mr-6 rounded-sm overflow-visible box-content text-stone-300 text-sm transition-all duration-250 ease-in w-4 h-4 inline-block shrink-0 leading-[1em] -align-[1.25em]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM448 96v64H64V96H448zM64 224h64V416H64V224zm384 0V416H192V224H448z"></path>
            </svg>
            </div>
            <div className=''>
              <h3 className='text-lg font-semibold'>Mint Pages</h3>
              <p className='text-sm opacity-30'>Sell your NFTs</p>
            </div>
          </div>
        </div>
        <div className='grow'/>
        <div></div>
      </div>
      <div className='col-span-9'>
        <div className='bg-stone-900 flex justify-end h-16 items-center px-5'>
          <div className='py-2 px-4 border border-white rounded-lg cursor-pointer hover:opacity-80'>Connect Wallet</div>
        </div>
        <div className='my-10 px-5'>
          <h1 className='text-3xl font-bold'>NFTs</h1>
          <div className='flex justify-between py-5 border-b border-stone-100/20'>
            <div className='flex bg-stone-950 '>
              <div onClick={() => setTabSelected(0)} className={`py-2 mr-0.5 px-4 rounded-l-lg cursor-pointer hover:bg-stone-900 ${tabSelected === 0 && "bg-stone-800"}`}>1/1s</div>
              <div onClick={() => setTabSelected(1)} className={`py-2 mr-0.5 px-4 cursor-pointer hover:bg-stone-900 ${tabSelected === 1 && "bg-stone-800"}`}>Limited Editions</div>
              <div onClick={() => setTabSelected(2)} className={`py-2 mr-0.5 px-4 cursor-pointer hover:bg-stone-900 ${tabSelected === 2 && "bg-stone-800"}`}>Open Editions</div>
              <div onClick={() => setTabSelected(3)} className={`py-2 px-4 rounded-r-lg cursor-pointer hover:bg-stone-900 ${tabSelected === 3 && "bg-stone-800"}`}>Collection NFTs</div>
            </div>
            <Link href="/studio/nfts/details">
              <div className='flex rounded-lg py-2 px-4 bg-white text-black cursor-pointer hover:opacity-80'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <p className='ml-2'>Create</p>
              </div>
            </Link>
          </div>
          <div className='flex flex-col text-center mt-5 p-20 border border-stone-100/20 rounded-lg'>
            <h2 className='text-2xl font-bold py-2'>You don&apost have any NFT of this type</h2>
            <p className='text-white/80 mb-5'>To get started you&aposll need your prepared assets, we&aposll help guide you along your way.</p>
            <Link href="/studio/nfts/details" className='mx-auto'>
              <div className='rounded-lg mx-auto py-2 px-4 bg-white text-black cursor-pointer hover:opacity-80'>
                Create
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
