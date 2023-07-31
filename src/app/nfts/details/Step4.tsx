'use client'
import React, { useState } from 'react'

interface Step4Props {
    base64File: string;
    nftName: string;
    nftDescription: string;
    nftLink: string;
    collectionBase64File: string;
    collectionName: string;
    collectionDescription: string;
}

const bitcoinAddressRegex = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,34}$/;

const Step4 = ({ base64File, nftName, nftDescription, nftLink, collectionBase64File, collectionName, collectionDescription }: Step4Props) => {
    const [tabIndex, setTabIndex] = useState(0)
    

  return (
    <>
        <div className='col-span-1'/>
        <div className='col-span-4'>
            <div className="flex w-full relative flex-col items-center bg-stone-900 rounded-lg p-2">
                <div className="flex min-h-[27.5rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-stone-800 ">
                    <div className='grow relative'>
                        <img
                        alt="Main Image"
                        src={base64File}
                        className="w-full min-h-[27.5rem] h-full object-cover rounded-lg relative"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-1'/>
        <div className='col-span-5'>
            <h1 className='text-3xl font-bold mb-4'>Review</h1>
            <p className='text-sm opacity-80'>Please review the details of your NFT before creating it. You will be asked to confirm a transaction in your wallet and pay a small transaction fee to create the NFT on the Bitcoin blockchain.</p>
            <div className='mt-10 flex items-center'>
                <img
                alt="Collection Image"
                src={collectionBase64File}
                className="w-16 h-16 object-cover rounded-lg relative"
                />
                <p className='ml-4 text-sm opacity-80'>{collectionName}</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-5xl font-bold mb-2'>{nftName}</h1>
                {nftLink.length > 0 && <a className='opacity-80' target="_blank" rel="noreferrer" href={nftLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <span>{nftLink}</span>
                </a>}
                {nftDescription.length > 0 && <div className='opacity-80 text-sm'>{nftDescription}</div>}
            </div>
        </div>
        <div className='col-span-1'/>
        <div className='col-span-12 mx-16 border border-gray-100/20 rounded-lg p-8'>
            <div className='flex'>
                <div onClick={() => setTabIndex(0)} className={`cursor-pointer p-2 ${tabIndex === 0 ? "border-b-2 font-semibold" : "opacity-80 font-normal" } border-purple-500`}>Creators</div>
                <div onClick={() => setTabIndex(1)} className={`cursor-pointer p-2 ${tabIndex === 1 ? "border-b-2 font-semibold" : "opacity-80 font-normal" } border-purple-500`}>Overview</div>
                <div onClick={() => setTabIndex(2)} className={`cursor-pointer p-2 ${tabIndex === 2 ? "border-b-2 font-semibold" : "opacity-80 font-normal" } border-purple-500`}>Summary</div>
            </div>
            {tabIndex === 0 && <div className='mt-4'>
                Creators Tab
            </div>}
            {tabIndex === 1 && <div className='mt-4'>
                Overview Tab
            </div>}
            {tabIndex === 2 && <div className='mt-4'>
                Summary Tab
            </div>}
        </div>
    </>
  )
}

export default Step4