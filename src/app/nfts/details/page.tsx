'use client'

import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useCallback,useMemo,useState } from 'react'
import { useDropzone } from 'react-dropzone';
import Stag from '@/components/Stag';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Drawer from '@/components/Drawer';
import CreatePopup from '@/components/CreatePopup';
const AuthButton = dynamic(() => import("@/components/AuthButton"), { ssr: false })

const NFTMintPage = () => {
    const [step, setStep] = useState(1)
    const [base64File, setBase64File] = useState("")
    const [nftName, setNftName] = useState("")
    const [nftDescription, setNftDescription] = useState("")
    const [nftLink, setNftLink] = useState("")
    const [nftLinkInvalid, setNftLinkInvalid] = useState(false)
    const [nftTypeOption, setNftTypeOption] = useState("One")
    const [nftQuantity, setNftQuantity] = useState(0)
    const [nftQuantityInvalid, setNftQuantityInvalid] = useState(false)
    const [nftRoyalty, setNftRoyalty] = useState(0)
    const [nftRoyaltyInvalid, setNftRoyaltyInvalid] = useState(false)
    const hasInvalidInput = useMemo(() => nftLinkInvalid || nftQuantityInvalid || nftRoyaltyInvalid, [nftLinkInvalid, nftQuantityInvalid, nftRoyaltyInvalid])
    const unlockStep23 = useMemo(() => !hasInvalidInput && nftName.length > 0 && base64File.length > 0, [hasInvalidInput, base64File, nftName])
    const [collectionBase64File, setCollectionBase64File] = useState("")
    const [collectionName, setCollectionName] = useState("")
    const [collectionDescription, setCollectionDescription] = useState("")
    const [collectionTransactionVout, setCollectionTransactionVout] = useState("")
    const unlockStep4 = useMemo(() => unlockStep23 && (collectionTransactionVout.length > 0 || (collectionBase64File.length > 0 && collectionName.length > 0)),[unlockStep23, collectionBase64File, collectionName])
    const [createPopupOpen, setCreatePopupOpen] = useState(false)

    const handleStep1 = (e:any) => {
        e.preventDefault()
        setStep(1)
    }

    const handleStep2 = (e:any) => {
        e.preventDefault()
        if (unlockStep23){
            setStep(2)
        }
    }

    const handleStep3 = (e:any) => {
        e.preventDefault()
        if (unlockStep23){
            setStep(3)
        }
    }

    const handleStep4 = (e:any) => {
        e.preventDefault()
        if (unlockStep4){
            setStep(4)
        }
    }

    const handleNextStep = (e:any) => {
        e.preventDefault()
        if (step === 1 && unlockStep23) {
            setStep(2)
        }
        if (step === 2 && unlockStep23) {
            setStep(3)
        }
        if (step === 3 && unlockStep4) {
            console.log("here")
            setStep(4)
        }
    }

    const handleCreate = (e:any) => {
        e.preventDefault()
        setCreatePopupOpen(true)
    }

  return (
    <div className='h-screen flex flex-col justify-between bg-black text-white'>
        <header className='sticky z-50 w-full top-0 left-0 h-24 flex justify-between items-center px-5 bg-stone-900 border-b border-stone-100/20'>
            <Link href="/">
                <div className='py-5 flex items-center cursor-pointer select-none'>
                    <Stag size={46}/>
                    <div className='flex items-baseline'>
                        <h1 className='ml-3 text-3xl font-bold'>PowCo</h1>
                        <p className='ml-1 text-2xl font-semibold bg-gradient-to-r from-green-500 via-violet-500 to-blue-500 text-transparent bg-clip-text'>Studio</p>
                    </div>
                </div>
            </Link>
            <ol className='flex space-x-6'>
                <li onClick={handleStep1} className={`flex items-center px-4 py-2 rounded-lg ${step === 1 ? "bg-stone-800" : "cursor-pointer"}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>1</span>
                    <span className='ml-2 text-sm font-semibold'>Details</span>
                </li>
                <li onClick={handleStep2} className={`flex items-center px-4 py-2 rounded-lg ${step === 2 ? "bg-stone-800" : `${unlockStep23 ? "cursor-pointer" : "opacity-20"}`}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>2</span>
                    <span className='ml-2 text-sm font-semibold'>Split</span>
                </li>
                <li onClick={handleStep3} className={`flex items-center px-4 py-2 rounded-lg ${step === 3 ? "bg-stone-800" : `${unlockStep23 ? "cursor-pointer" : "opacity-20"}`}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>3</span>
                    <span className='ml-2 text-sm font-semibold'>Collection</span>
                </li>
                <li onClick={handleStep4} className={`flex items-center px-4 py-2 rounded-lg ${step === 4 ? "bg-stone-800" : `${unlockStep4 ? "cursor-pointer" : "opacity-20"}`}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>4</span>
                    <span className='ml-2 text-sm font-semibold'>Create</span>
                </li>
            </ol>
            <AuthButton/>
        </header>
        <main className='grow overflow-auto shrink grid grid-cols-12 gap-16 p-16 bg-black'>
            {step === 1 && (
                <Step1 
                    base64File={base64File} 
                    setBase64File={setBase64File} 
                    nftName={nftName} 
                    setNftName={setNftName} 
                    nftDescription={nftDescription} 
                    setNftDescription={setNftDescription} 
                    nftLink={nftLink} 
                    setNftLink={setNftLink} 
                    nftLinkInvalid={nftLinkInvalid} 
                    setNftLinkInvalid={setNftLinkInvalid} 
                    nftTypeOption={nftTypeOption} 
                    setNftTypeOption={setNftTypeOption} 
                    nftQuantity={nftQuantity} 
                    setNftQuantity={setNftQuantity} 
                    nftQuantityInvalid={nftQuantityInvalid} 
                    setNftQuantityInvalid={setNftQuantityInvalid} 
                    nftRoyalty={nftRoyalty} 
                    setNftRoyalty={setNftRoyalty} 
                    nftRoyaltyInvalid={nftRoyaltyInvalid} 
                    setNftRoyaltyInvalid={setNftRoyaltyInvalid} 
                />)
            }
            {step === 2 && (
                <Step2 
                    base64File={base64File}
                    nftName={nftName}
                    nftDescription={nftDescription}
                    nftLink={nftLink} 
                />
            )}
            {step === 3 && (
                <Step3 
                    base64File={base64File}
                    nftName={nftName}
                    nftDescription={nftDescription}
                    nftLink={nftLink} 
                    collectionBase64File={collectionBase64File}
                    setCollectionBase64File={setCollectionBase64File}
                    collectionName={collectionName}
                    setCollectionName={setCollectionName}
                    collectionDescription={collectionDescription}
                    setCollectionDescription={setCollectionDescription}
                    collectionTransactionVout={collectionTransactionVout}
                    setCollectionTransactionVout={setCollectionTransactionVout}
                />
            )}
            {step === 4 && (
                <Step4 
                    base64File={base64File}
                    nftName={nftName}
                    nftDescription={nftDescription}
                    nftLink={nftLink} 
                    collectionBase64File={collectionBase64File}
                    collectionName={collectionName}
                    collectionDescription={collectionDescription}
                />
            )}
        </main>
        <footer className='sticky z-50 bottom-0 left-0 w-full px-5 h-24 flex items-center justify-between bg-stone-900 border-t border-stone-100/20'>
            <Link href="/nfts">
                <div className='px-6 py-3 bg-stone-800 rounded-lg cursor-pointer hover:bg-stone-700'>Exit</div>
            </Link>
            {step < 4 ? (
                <button onClick={handleNextStep} disabled={(step < 3 && !unlockStep23) || (step === 3 && !unlockStep4)} className='flex px-6 py-3 bg-green-500 disabled:bg-stone-800 rounded-lg cursor-pointer disabled:cursor-default hover:bg-green-400 hover:disabled:bg-stone-800 disabled:opacity-30'>
                    <p className='mr-2'>Continue</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button> 
                ): (
                <button onClick={handleCreate} disabled={!unlockStep4} className='flex px-6 py-3 bg-green-500 disabled:bg-stone-800 rounded-lg cursor-pointer disabled:cursor-default hover:bg-green-400 hover:disabled:bg-stone-800 disabled:opacity-30'>
                    <p className='mr-2'>Create</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            )}
        </footer>
        <Drawer
            selector='#createPopupController'
            isOpen={createPopupOpen}
            onClose={() => setCreatePopupOpen(false)}
        >
            <CreatePopup onClose={() => setCreatePopupOpen(false)}/>
        </Drawer>
    </div>
  )
}

export default NFTMintPage