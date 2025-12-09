
import Image from 'next/image'
import React from 'react'
import PortfolioImage from '../../../public/WhatsApp_Image_2025-06-29_at_00.45.34_b5bd039c-removebg-preview.png'

export default function Hero() {
    return (
        <div className='grid grid-cols-5 items-center gap-10  bg-linear-20 from-black/80 to-gray-800 lg:px-32 h-[calc(100vh-30vh)] mx-auto'>
            <div className='col-span-3 '>
                <h2 className='lg:text-3xl text-xl font-semibold'>Hey, I am Siyam</h2>
                <h1 className='lg:text-6xl md:text-5xl text-3xl font-semibold my-5'><span className='text-warning'>MERN</span> Stack Developer</h1>
                <p className='opacity-60'>Currently, I am working with Tailwind CSS, JavaScript, React, and other
                    modern web technologies to build dynamic and responsive web applications.</p>
                <div className='my-6'>
                    social media
                </div>
            </div>
            <div className='col-span-2 '>
               <Image className='h-72 w-72 object-cover ' src={PortfolioImage} alt='Portfolio image'/>
            </div>
        </div>
    )
}
