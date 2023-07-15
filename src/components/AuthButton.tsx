'use client'

import { useRelay } from '@/context/RelayContext'
import React, { useState } from 'react'


const AuthButton = () => {
    const { relayxAuthenticated, relayxAvatar, relayxUserName, relayxAuthenticate, relayxLogout } = useRelay()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = (e:any) => {
        e.preventDefault()
        relayxLogout()
        setIsDropdownOpen(false)
    }

  return (
    <>
        {!relayxAuthenticated ? (
            <div onClick={relayxAuthenticate} className='py-2 px-4 border border-white rounded-lg cursor-pointer hover:opacity-80'>Connect Wallet</div>
        ) : (
            <div className='relative'>
                <button onClick={toggleDropdown} type="button" className='w-44 cursor-pointer flex justify-around p-3 rounded-lg bg-stone-700 hover:bg-stone-700/80'>
                    <img className='rounded-full h-6 w-6' src={relayxAvatar}/>
                    <p className='ml-2'>{relayxUserName}</p>
                </button>
                {isDropdownOpen && <div onClick={handleLogout} className='absolute cursor-pointer flex right-0 p-3 mt-2 z-10 bg-stone-800 hover:bg-stone-700 rounded lg shadow w-44 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <p className='ml-3'>Log Out</p>
                </div>}
            </div>
        )}
    </>
  )
}

export default AuthButton