'use client'
import Image from 'next/image'
import React from 'react'

export default function ExpretnessCard({skill}) {
    const {stackURL, name} = skill || {}

  return (
    <div className='grid justify-center my-4'>
        <Image className=' rounded-full object-cover'  width={65} 
            height={65} src={stackURL} alt='stack image'/>
        <h1 className='font-semibold'>{name}</h1>
    </div>
  )
}
