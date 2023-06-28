'use client'
import React from 'react'

interface Step3Props {
    base64File: string;
    nftName: string;
    nftDescription: string;
    nftLink: string;
}

const Step3 = ({ base64File, nftName, nftDescription, nftLink }: Step3Props) => {
    const creatorAddress = "1myAddress1234567898765432345678765" // TODO how to get the relayAddress from relay Provider
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
        <div className='bg-stone-900 border-t border-stone-100/30 rounded-b-lg p-4 flex flex-col'>
            <h2 className='text-3xl font-bold'>{nftName}</h2>
            <p className='opacity-50 mt-2'>{nftDescription}</p>
            <a target="_blank" rel="noreferrer" href={nftLink} className='mt-4 text-purple-500 hover:underline font-semibold'>{nftLink}</a>
        </div>
    </div>
    <div className='col-span-1'/>
    <div className='col-span-5'>
        <div className='flex flex-col pb-10 border-b border-gray-100/30'>
            <h1 className='text-3xl font-bold mb-2'>Add to collection</h1>
            <p className='text-sm opacity-80'>Add your NFTs to a collection. This is required to ensure your NFTs are easily searchable and grouped together in wallets and marketplaces.</p>
        </div>
        
    </div>
    <div className='col-span-1'/>
    </>
  )
}

export default Step3