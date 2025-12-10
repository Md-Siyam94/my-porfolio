'use client'
import Image from 'next/image'
import React from 'react'

export default function ExpretnessCard({skill}) {
    const {stackURL, name} = skill || {}

  return (
    <div>
        <Image className='h-16 w-16 object-cover'  width={100} 
            height={100} src={stackURL} alt='stack image'/>
        <h1 className='font-semibold'>{name}</h1>
    </div>
  )
}
