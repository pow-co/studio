'use client'

import Link from 'next/link';
import React, { useCallback,useState } from 'react'
import { useDropzone } from 'react-dropzone';

const NFTMintPage = () => {
    const [step, setStep] = useState(1)
    const [files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
          const reader = new FileReader();
    
          reader.onabort = () => console.log('file reading was aborted');
          reader.onerror = () => console.log('file reading has failed');
          reader.onload = () => {
          // Do whatever you want with the file contents
            const binaryStr = reader.result;
            if (!binaryStr) {
              console.log('Error reading file');
              return;
            }
            console.log('file', binaryStr);
            // @ts-ignore
            const hex = buf2hex(binaryStr);
    
            console.log('file hex', hex);
    
            const base64 = Buffer.from(hex, 'hex').toString('base64');
            console.log('file base64', base64);
    
            /* const bsocial = new BSocial('pow.co');
    
            const post = bsocial.post();
            // and image data Url
            post.addImage(`data:image/png;base64,${base64}`);
    
            if (signWithPaymail){
              post.addMapData('paymail', paymail)
            }
    
            const ops = post.getOps('hex');
    
            const utf8 = post.getOps('utf8');
    
            console.log('file ops', ops)
    
            console.log('file ops utf8', utf8)
            setOpReturn(ops.map((op: any) => `0x${op}`)) */
          };
          reader.readAsArrayBuffer(file);
        });
    
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })));
      }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] } });

    const thumbs = files.map((file) => (
        // @ts-ignore
        <div className="infline-flex m-4 h-full w-full rounded-lg p-2" key={file.name}>
          <div className="flex min-w-0 overflow-hidden">
            <img
            // @ts-ignore
              src={file.preview}
              className="block h-full w-auto rounded-lg"
              // Revoke data uri after image is loaded
              // @ts-ignore
              onLoad={() => { URL.revokeObjectURL(file.preview); }}
            />
          </div>
        </div>
      ));

  return (
    <div className='h-screen flex flex-col bg-black text-white'>
        <header className='h-24 flex justify-between items-center px-5 bg-stone-900 border-b border-stone-100/20'>
            <div className='py-5 flex items-baseline cursor-pointer select-none'>
            <h1 className='text-3xl font-bold'>PowCo</h1>
            <p className='ml-1 text-2xl font-semibold bg-gradient-to-r from-green-500 via-violet-500 to-blue-500 text-transparent bg-clip-text'>Studio</p>
            </div>
            <ol className='flex space-x-6'>
                <li className={`flex items-center px-4 py-2 rounded-lg ${step === 1 ? "bg-stone-800" : "opacity-20"}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>1</span>
                    <span className='ml-2 text-sm font-semibold'>Details</span>
                </li>
                <li className={`flex items-center px-4 py-2 rounded-lg ${step === 2 ? "bg-stone-800" : "opacity-20"}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>2</span>
                    <span className='ml-2 text-sm font-semibold'>Split</span>
                </li>
                <li className={`flex items-center px-4 py-2 rounded-lg ${step === 3 ? "bg-stone-800" : "opacity-20"}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>3</span>
                    <span className='ml-2 text-sm font-semibold'>Collection</span>
                </li>
                <li className={`flex items-center px-4 py-2 rounded-lg ${step === 4 ? "bg-stone-800" : "opacity-20"}`}>
                    <span className='flex items-center justify-center w-6 h-6 rounded-full border border-white'>4</span>
                    <span className='ml-2 text-sm font-semibold'>Create</span>
                </li>
            </ol>
            <div className='py-2 px-4 border border-white rounded-lg cursor-pointer hover:opacity-80'>Connect Wallet</div>
        </header>
        <main className='grow grid grid-cols-12 gap-16 p-16'>
            <div className='col-span-6'>
                <section>
                    {files.length === 0 ? (
                    <div className="flex w-full flex-col items-center justify-center bg-transparent p-4" {...getRootProps({})}>
                        <label htmlFor="dropzone" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-primary-100 hover:bg-primary-200 dark:border-gray-600 dark:bg-primary-700/20 dark:hover:border-gray-500 dark:hover:bg-primary-800/20">
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg aria-hidden="true" className="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            {' '}
                            or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone" {...getInputProps()} />
                        </label>
                    </div>
                    )
                    : (
                        <aside className="mt-4 flex flex-row flex-wrap">
                        {thumbs}
                        </aside>
                    )}
                </section>
            </div>
            <div className='col-span-6 px-10'>
                <h1 className='text-3xl font-bold'>Create NFT</h1>
                <p className='opacity-80'>You can create a single NFT or editions. Open Editions allow you to create an unlimited number of prints. Limited Editions allow you to set a limit to how many prints can be created from the original.</p>
                <div className='mt-10'>
                    <div className='flex justify-between'>
                        <label htmlFor='nft-name' className=''>Name<span>(required)</span></label>
                        <div>0/32</div>
                    </div>
                    <input required type='text' id="nft-name" placeholder='Name' className='w-full' />
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between'>
                        <label htmlFor='nft-description' className=''>Description</label>
                        <div>0/500</div>
                    </div>
                    <textarea id="nft-description" placeholder='Name' className='w-full' />
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between'>
                        <label htmlFor='nft-link' className=''>Link</label>
                        <div>0/100</div>
                    </div>
                    <input type='text' id="nft-link" placeholder='Link' className='w-full' />
                </div>
                <div className='mt-10'>
                    <label htmlFor='nft-type' className=''>NFT type<span>(required)</span></label>
                    <select id="nft-type">
                        <option>One of One</option>
                        <option>Limited Edition</option>
                        <option>Open Edition</option>
                    </select>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between'>
                    <div>
                        <label htmlFor='nft-royalty' className=''>Name<span>(required)</span></label>
                        <p className='opacity-80'>The percentage of future sales that will be sent to the creators of this NFT.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    </div>
                    <input required type='number' id="nft-royalty" />
                </div>
            </div>
        </main>
        <footer className='px-5 h-24 flex items-center justify-between bg-stone-900 border-t border-stone-100/20'>
            <Link href="/studio/nfts">
                <div className='px-6 py-3 bg-stone-800 rounded-lg cursor-pointer hover:bg-stone-700'>Exit</div>
            </Link>
            <button disabled className='flex px-6 py-3 bg-stone-800 rounded-lg cursor-pointer disabled:cursor-default hover:bg-stone-700 hover:disabled:bg-stone-800 disabled:opacity-30'>
                <p className='mr-2'>Continue</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </footer>
    </div>
  )
}

export default NFTMintPage