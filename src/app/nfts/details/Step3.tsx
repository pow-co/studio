'use client'
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { buf2hex } from '@/utils';

interface Step3Props {
    base64File: string;
    nftName: string;
    nftDescription: string;
    nftLink: string;
    collectionBase64File: string;
    setCollectionBase64File: Dispatch<SetStateAction<string>>;
    collectionName: string;
    setCollectionName: Dispatch<SetStateAction<string>>;
    collectionDescription: string;
    setCollectionDescription: Dispatch<SetStateAction<string>>;
}

const Step3 = ({ base64File, nftName, nftDescription, nftLink, collectionBase64File, setCollectionBase64File, collectionName, setCollectionName, collectionDescription, setCollectionDescription }: Step3Props) => {
    const [isCreateCollection, setIsCreateCollection] = useState(true)
    const creatorAddress = "1myAddress1234567898765432345678765" // TODO how to get the relayAddress from relay Provider

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
            setCollectionBase64File(`data:${fileType};base64,${base64}`)
    
            };
            reader.readAsArrayBuffer(file);
        });
    }, []);

    const { getRootProps, getInputProps, open } = useDropzone({ onDrop, accept: { 'image/*': [] } });

    const handleChangeCollectionName = (e:any) => {
        e.preventDefault()
        setCollectionName(e.target.value)
    }

    const handleChangeCollectionDescription = (e:any) => {
        e.preventDefault()
        setCollectionDescription(e.target.value)
    }

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
        <div className='flex'>
            <div onClick={() => setIsCreateCollection(true)} className={`cursor-pointer p-4 ${isCreateCollection ? "border-b-2 font-semibold" : "opacity-80"} border-purple-500`}>Create New Collection</div>
            <div onClick={() => setIsCreateCollection(false)} className={`cursor-pointer p-4 ${!isCreateCollection ? "border-b-2 font-semibold" : "opacity-80"} border-purple-500`}>Existing Collections</div>
        </div>
        <div className='mt-10 flex flex-col'>
            <section className='grid grid-cols-12 gap-4'>
                {collectionBase64File.length === 0 ? (
                <div className={`col-span-3 flex relative flex-col items-center justify-center bg-stone-900 rounded-lg p-2`} {...getRootProps({})}>
                    <label htmlFor="dropzone" className="flex min-h-[7.5rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-stone-800 ">
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg aria-hidden="true" className="h-8 w-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <input id="dropzone" {...getInputProps()} />
                    </label>
                </div>
                )
                : (
                    <aside className="col-span-3 flex relative flex-col w-full items-center justify-center bg-stone-900 rounded-lg p-2">
                        <div className="group flex min-h-[7.5rem] w-full cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-stone-800 ">
                            <div className='grow relative'>
                                <img
                                alt="Collection Image"
                                src={collectionBase64File}
                                className="w-full min-h-[7.5rem] h-full object-cover rounded-lg relative"
                                />
                            </div>
                            <div onClick={() => setCollectionBase64File("")} className='hidden group-hover:flex cursor-pointer absolute h-full w-full rounded-lg'>
                                <div className='flex absolute h-full w-full rounded-lg border-2 border-red-500 bg-stone-900 opacity-90'/>
                                <div className='flex flex-col items-center justify-center w-full rounded-lg z-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 stroke-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    <p className='font-semibold mt-2 text-red-500'>Remove Image</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                )}
                <div className='col-span-9 flex flex-col items-start justify-between'>
                    <div>
                        <div className='font-semibold'>Collection Image<span className='font-normal ml-2 opacity-50'>(required)</span></div>
                        <p className='text-sm opacity-50'>Supported file types are JPG, PNG, GIF.</p>
                    </div>
                    <button onClick={open} disabled={collectionBase64File.length > 0} className='rounded-lg py-2 px-4 bg-white text-black cursor-pointer hover:opacity-80 disabled:cursor-default disabled:opacity-30 disabled:hover:opacity-30'>Select</button>
                </div>
            </section>
        </div>
        <div className='mt-10'>
            <div className='flex justify-between mb-2'>
                <label htmlFor='collection-name' className='font-semibold'>Name<span className='ml-1 font-normal opacity-80'>(required)</span></label>
                <div className='text-sm opacity-80'>{collectionName.length}/32</div>
            </div>
            <input autoComplete='off' maxLength={32} required type='text' id="collection-name" placeholder='Name' value={collectionName} onChange={handleChangeCollectionName} className='w-full p-4 rounded-lg appearance-none bg-stone-900 placeholder:hover:text-white/80 focus:border-2 focus:outline-none focus:border-green-500' />
        </div>
        <div className='mt-10'>
            <div className='flex justify-between mb-2'>
                <label htmlFor='nft-description' className='font-semibold'>Description</label>
                <div className='text-sm opacity-80'>{collectionDescription.length}/500</div>
            </div>
            <textarea id="nft-description" placeholder='Name' maxLength={500} rows={4} value={collectionDescription} onChange={handleChangeCollectionDescription} className='w-full p-4 rounded-lg appearance-none bg-stone-900 placeholder:hover:text-white/80 focus:border-2 focus:outline-none focus:border-green-500' />
        </div>
    </div>
    <div className='col-span-1'/>
    </>
  )
}

export default Step3