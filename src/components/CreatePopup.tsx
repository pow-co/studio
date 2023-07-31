'use client'
import React from 'react'

interface CreatePopupProps {
    onClose: () => void
}

const CreatePopup = ({ onClose }: CreatePopupProps) => {
  return (
    <div onClick={(e:any) => e.stopPropagation()} className='fixed inset-0 backdrop-blur-lg'>
        <div className='flex flex-col h-screen'>
            <div onClick={onClose} className='grow cursor-pointer'/>
            <div className='flex'>
                <div onClick={onClose} className='grow cursor-pointer'/>
                <div className='p-5 min-w-sm bg-stone-900 blur-none'>
                    test
                </div>
                <div onClick={onClose} className='grow cursor-pointer'/>
            </div>
            <div onClick={onClose} className='grow cursor-pointer'/>
        </div>
    </div>
  )
}

export default CreatePopup