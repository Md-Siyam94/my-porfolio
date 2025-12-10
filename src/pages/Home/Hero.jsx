
import Image from 'next/image'
import React from 'react'
import PortfolioImage from '../../../public/WhatsApp_Image_2025-06-29_at_00.45.34_b5bd039c-removebg-preview.png'
import bgImage from '../../../public/lovepik-colorful-shape-text-background-png-image_401090566_wh1200-removebg-preview.png'
import social1 from '../../../public/linkedin.png'
import social2 from '../../../public/facebook.png'
import social3 from '../../../public/github.png'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className='grid grid-cols-5  items-center  gap-10 py-20  bg-linear-20 from-black/80 to-gray-800 lg:px-40 h-[calc(100vh-15vh)] mx-auto'>
            <div className='col-span-3 '>
                <h2 className='lg:text-3xl text-xl font-semibold'>Hey, I am Siyam</h2>
                <h1 className='lg:text-6xl md:text-5xl text-3xl font-semibold my-5'><span className='text-warning'>MERN</span> Stack Developer</h1>
                <p className='opacity-60'>Currently, I am working with Tailwind CSS, JavaScript, React, and other
                    modern web technologies to build dynamic and responsive web applications.</p>
                <div className='my-6 flex gap-5'>
                    <Link href={'https://www.linkedin.com/in/md-siyam-d942404'} target="_blank" rel="noopener noreferrer"><Image className='h-12 w-12 cursor-pointer' src={social1} alt='linkedin' /></Link>
                    <Link href={'https://github.com/Md-Siyam94/'} target="_blank" rel="noopener noreferrer"><Image className='h-12 w-12 cursor-pointer' src={social3} alt='facebook' /></Link>
                    <Link href={'https://www.facebook.com/profile.php?id=100049223240013'} target="_blank" rel="noopener noreferrer"><Image className='h-12 w-12 cursor-pointer' src={social2} alt='github' /></Link>
                </div>
            </div>
            <div className='col-span-2 grid justify-end '>
                <Image className='h-72 w-72 lg:ml-20  pb-5  object-cover bg-[radial-gradient(circle,rgba(192,38,211,0.8)_0%,rgba(192,38,211,0)_70%)] ' src={PortfolioImage} alt='Portfolio image' />
            </div>
        </div>
    )
}
