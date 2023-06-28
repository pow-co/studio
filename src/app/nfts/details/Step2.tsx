'use client'
import React from 'react'

interface Step2Props {
    base64File: string;
    nftName: string;
    nftDescription: string;
    nftLink: string;
}

const Step2 = ({ base64File, nftName, nftDescription, nftLink }: Step2Props) => {
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
            <h1 className='text-3xl font-bold mb-2'>Creator Splits</h1>
            <p className='text-sm opacity-80'>You can split the royalties for this NFT among multiple creators. Each percentage will be automatically deposited into each creator’s wallet.</p>
        </div>
        <div className='grid grid-cols-12 gap-2 mt-10'>
            <div className='col-span-6 font-semibold'>
                Your Wallet<span className='ml-1 font-normal opacity-80'>(Default)</span>
            </div>
            <div className='col-span-6 font-semibold'>Royalty Percentage</div>
            <input disabled defaultValue={creatorAddress} type="text" className='col-span-6 p-4 text-ellipsis bg-stone-900 rounded-lg'/>
            <input type="number" min={0} max={100} value={100} step={1} className='col-span-6 p-4 bg-stone-900 rounded-lg'/>
        </div>
        <button type="button" className='bg-stone-900 p-4 rounded-lg flex mt-4 cursor-pointer hover:bg-stone-800'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <p>Add Creator</p>
        </button>
    </div>
    <div className='col-span-1'/>
    </>
  )
}

export default Step2