'use client'

import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone';
import { buf2hex } from '@/utils';

interface Step1Props {
    base64File: string;
    setBase64File: Dispatch<SetStateAction<string>>;
    nftName: string;
    setNftName: Dispatch<SetStateAction<string>>;
    nftDescription: string;
    setNftDescription: Dispatch<SetStateAction<string>>;
    nftLink: string;
    setNftLink: Dispatch<SetStateAction<string>>;
    nftLinkInvalid: boolean;
    setNftLinkInvalid: Dispatch<SetStateAction<boolean>>;
    nftTypeOption: string;
    setNftTypeOption: Dispatch<SetStateAction<string>>;
    nftQuantity: number;
    setNftQuantity: Dispatch<SetStateAction<number>>;
    nftQuantityInvalid: boolean;
    setNftQuantityInvalid: Dispatch<SetStateAction<boolean>>;
    nftRoyalty: number;
    setNftRoyalty: Dispatch<SetStateAction<number>>;
    nftRoyaltyInvalid: boolean;
    setNftRoyaltyInvalid: Dispatch<SetStateAction<boolean>>;
}

const Step1 = ({ 
    base64File, 
    setBase64File, 
    nftName, 
    setNftName, 
    nftDescription, 
    setNftDescription, 
    nftLink, 
    setNftLink, 
    nftLinkInvalid, 
    setNftLinkInvalid,
    nftTypeOption,
    setNftTypeOption,
    nftQuantity,
    setNftQuantity,
    nftQuantityInvalid,
    setNftQuantityInvalid,
    nftRoyalty,
    setNftRoyalty,
    nftRoyaltyInvalid,
    setNftRoyaltyInvalid
}: Step1Props) => {
    const hasMetaData = useMemo(() =>  nftName.length > 0 || nftDescription.length > 0 || nftLink.length > 0, [nftName, nftDescription, nftLink])
    
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();
    
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result as ArrayBuffer;
            const fileType = file.type;
            if (!binaryStr) {
              console.log('Error reading file');
              return;
            }
            console.log('file', file);
            console.log('binary', binaryStr)
            const hex = buf2hex(binaryStr);
    
            console.log('file hex', hex);
    
            const base64 = Buffer.from(hex, 'hex').toString('base64');
            console.log('file base64', `data:${fileType};base64,${base64}`);
            setBase64File(`data:${fileType};base64,${base64}`)
    
            };
            reader.readAsArrayBuffer(file);
        });
    }, []); 

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] } });

    const handleChangeNftName = (e:any) => {
        e.preventDefault()
        setNftName(e.target.value)
    }

    const handleChangeNftDescription = (e:any) => {
        e.preventDefault()
        setNftDescription(e.target.value)
    }
    const handleChangeNftLink = (e:any) => {
        e.preventDefault()
        setNftLinkInvalid(false)
        setNftLink(e.target.value)
    }

    const handleBlurNftLink = (e:any) => {
        e.preventDefault()
        // validate if NFT url is correct
        // TODO: better URL validation + display shortenned URL
        const urlRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,})(?:\/(?:[^\s/]+\/?)*\/?)?(?:\?[^\s?]+)?(?:#[^\s]+)?$/;
        if(!urlRegex.test(nftLink)){
            setNftLinkInvalid(true)
        } else {
            setNftLinkInvalid(false)
        }
    }

    const handleChangeNftTypeOption = (e:any) => {
        e.preventDefault()
        setNftTypeOption(e.target.value)
    }

    const handleChangeNftQuantity = (e:any) => {
        e.preventDefault()
        setNftQuantityInvalid(false)
        setNftQuantity(parseInt(e.target.value))
    }

    const handleBlurNftQuantity = (e:any) => {
        e.preventDefault()
        console.log(nftQuantity)
        if(nftQuantity <= 0 || Number.isNaN(nftQuantity)){
            setNftQuantityInvalid(true)
        }
    }

    const handleChangeNftRoyalty = (e:any) => {
        e.preventDefault()
        setNftRoyaltyInvalid(false)
        setNftRoyalty(parseFloat(e.target.value))
    }

    const handleBlurNftRoyalty = (e:any) => {
        e.preventDefault()
        if(nftRoyalty < 0 || Number.isNaN(nftRoyalty)){
            setNftRoyaltyInvalid(true)
        }
    }

  return (
    <>
        <div className='col-span-1'/>
        <div className='col-span-4'>
            <section>
                {base64File.length === 0 ? (
                <div className={`flex w-full relative flex-col items-center justify-center bg-stone-900 rounded-t-lg ${!hasMetaData && "rounded-b-lg"} p-2`} {...getRootProps({})}>
                    <label htmlFor="dropzone" className="flex min-h-[27.5rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-stone-800 ">
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg aria-hidden="true" className="mb-3 h-8 w-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2">
                            Click to add your NFT media or drag-and-drop it here
                            </p>
                            <p className="text-sm opacity-30">We currently support SVG, PNG, JPG, and GIF files. </p>
                        </div>
                        <input id="dropzone" {...getInputProps()} />
                    </label>
                </div>
                )
                : (
                    <aside className="flex w-full relative flex-col items-center justify-center bg-stone-900 rounded-lg p-2">
                        <div className="group flex min-h-[27.5rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-stone-800 ">
                            <div className='grow relative'>
                                <img
                                alt="Main Image"
                                src={base64File}
                                className="w-full min-h-[27.5rem] h-full object-cover rounded-lg relative"
                                />
                            </div>
                            <div onClick={() => setBase64File("")} className='hidden group-hover:flex cursor-pointer absolute h-full w-full rounded-lg'>
                                <div className='flex absolute h-full w-full rounded-lg border-2 border-red-500 bg-stone-900 opacity-90'/>
                                <div className='flex flex-col items-center justify-center w-full rounded-lg z-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    <p className='text-lg font-semibold mt-2 text-red-500'>Remove Image</p>
                                </div>

                            </div>
                        </div>
                    </aside>
                )}
            </section>
            {hasMetaData && (
            <div className='bg-stone-900 border-t border-stone-100/30 rounded-b-lg p-4 flex flex-col'>
                <h2 className='text-3xl font-bold'>{nftName}</h2>
                <p className='opacity-50 mt-2'>{nftDescription}</p>
                <a target="_blank" rel="noreferrer" href={nftLink} className='mt-4 text-purple-500 hover:underline font-semibold'>{nftLink}</a>
            </div>)}
        </div>
        <div className='col-span-1'/>
        <div className='col-span-5 '>
            <h1 className='text-3xl font-bold mb-4'>Create NFT</h1>
            <p className='text-sm opacity-80'>You can create a single NFT or editions. Open Editions allow you to create an unlimited number of prints. Limited Editions allow you to set a limit to how many prints can be created from the original.</p>
            <div className='mt-10'>
                <div className='flex justify-between mb-2'>
                    <label htmlFor='nft-name' className='font-semibold'>Name<span className='ml-1 font-normal opacity-80'>(required)</span></label>
                    <div className='text-sm opacity-80'>{nftName.length}/32</div>
                </div>
                <input maxLength={32} required type='text' id="nft-name" placeholder='Name' value={nftName} onChange={handleChangeNftName} className='w-full p-4 rounded-lg appearance-none bg-stone-900 placeholder:hover:text-white/80 focus:border-2 focus:outline-none focus:border-green-500' />
            </div>
            <div className='mt-10'>
                <div className='flex justify-between mb-2'>
                    <label htmlFor='nft-description' className='font-semibold'>Description</label>
                    <div className='text-sm opacity-80'>{nftDescription.length}/500</div>
                </div>
                <textarea id="nft-description" placeholder='Name' maxLength={500} rows={4} value={nftDescription} onChange={handleChangeNftDescription} className='w-full p-4 rounded-lg appearance-none bg-stone-900 placeholder:hover:text-white/80 focus:border-2 focus:outline-none focus:border-green-500' />
            </div>
            <div className='mt-10'>
                <div className={`flex justify-between mb-2 ${nftLinkInvalid && "text-red-500"}`}>
                    <label htmlFor='nft-link' className='font-semibold'>Link</label>
                    <div className='text-sm opacity-80'>{nftLink.length}/100</div>
                </div>
                <input type='text' id="nft-link" maxLength={100} value={nftLink} onChange={handleChangeNftLink} onBlur={handleBlurNftLink} placeholder='Enter the website or link to your project' className='w-full p-4 rounded-lg appearance-none bg-stone-900 placeholder:hover:text-white/80 focus:border-2 focus:outline-none focus:border-green-500' />
                {nftLinkInvalid && <p className='mt-2 text-sm text-red-500'>Must be a valid URL</p>}
            </div>
            <div className='mt-10 flex flex-col'>
                <label htmlFor='nft-type' className='mb-2 font-semibold'>NFT type<span className='ml-1 font-normal opacity-80'>(required)</span></label>
                <select id="nft-type" value={nftTypeOption} onChange={handleChangeNftTypeOption} className=' w-full p-4 rounded-lg appearance-none bg-stone-900 focus:border-2 focus:outline-none focus:border-green-500'>
                    <option value="One">One of One</option>
                    <option value="Limited">Limited Edition</option>
                    <option value="Open">Open Edition</option>
                </select>
            </div>
            {nftTypeOption === "Limited" && (
                <div className='mt-10'>
                    <div className={`${nftQuantityInvalid && "text-red-500"}`}>
                        <label htmlFor='nft-quantity' className='font-semibold'>Quantity<span className='ml-1 font-normal opacity-80'>(required)</span></label>
                        <p className='text-sm opacity-80'>The maximum number of editions that can be created from this NFT.</p>
                    </div>
                    <input required type='number' min={0} step={1} onChange={handleChangeNftQuantity} onBlur={handleBlurNftQuantity} value={nftQuantity} id="nft-quantity" className='p-4 mt-2 rounded-lg appearance-none bg-stone-900 focus:border-2 focus:outline-none focus:border-green-500' />
                    {nftQuantityInvalid && <p className='mt-2 text-sm text-red-500'>Quantity must be greater than 0.</p>}
                </div>
            )}
            <div className='mt-10'>
                <div className='flex justify-between mb-2'>
                    <div className={`${nftRoyaltyInvalid && "text-red-500"}`}>
                        <label htmlFor='nft-royalty' className='font-semibold'>Secondary Sales Royalties<span className='ml-1 font-normal opacity-80'>(required)</span></label>
                        <p className='text-sm opacity-80'>The percentage of future sales that will be sent to the creators of this NFT.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </div>
                <input required type='number' id="nft-royalty" step={0.5} value={nftRoyalty} onChange={handleChangeNftRoyalty} onBlur={handleBlurNftRoyalty} className='p-4 rounded-lg appearance-none bg-stone-900 focus:border-2 focus:outline-none focus:border-green-500' />
                {nftRoyaltyInvalid && <p className='mt-2 text-sm text-red-500'>Royalty cannot be negative.</p>}
            </div>
        </div>
        <div className='col-span-1'/>
    </>
  )
}

export default Step1