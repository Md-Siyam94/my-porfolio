'use client'
import ExpretnessCard from '@/components/ExpretnessCard'
import React, { useEffect, useState } from 'react'

export default function Skills() {
    const [expertness, setExpertness] = useState([])
    useEffect(() => {
        fetch('expertness.json')
            .then(res => res.json())
            .then(data => {
                setExpertness(data)
            })
    }, [])
    return (
        <div className='bg-white/10 lg:px-32 py-20 grid lg:grid-cols-5 grid-cols-1 items-center '>
            <div className='col-span-2'>
                <h1 className='lg:text-7xl md:text-5xl text-3xl font-semibold'>My Soft Expertness</h1>
                <p className='opacity-80 mt-4'>With a strong foundation in web development, I specialize in the MERN stack (MongoDB, Express.js, React.js, and Node.js)</p>
            </div>
            <div className='col-span-3 border h-[330px] overflow-y-scroll'>
                {
                    expertness.map((skill, index)=> <ExpretnessCard key={index} skill={skill}></ExpretnessCard> )
                }
            </div>
        </div>
    )
}
