import Image from 'next/image'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import ContactMe from '../../../public/contact.jpg'
import { IoLocationOutline } from "react-icons/io5";


export default function Contact() {
    return (
        <div className='lg:px-40 px-2 pt-24 pb-40 grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div className='col-span-1 text-center lg:text-start'>
                <h2 className='text-warning font-semibold'>How to contact you?</h2>
                <h1 className='lg:text-6xl md:text-4xl text-3xl font-semibold my-4'>Get In Touch</h1>
                <p>I have here to help and answer any question you might have. I look forward to hearing from you!</p>
                <div className='flex gap-4 mt-4 mb-2 items-center'>
                    <IoLocationOutline />
                    <p className=''>Jhalokathi, Barishal, Bangladesh</p>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <MdOutlineEmail classNam='text-lg'/>
                    <p className=''>siyam942404@gmail.com</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <FaWhatsapp />
                    <p className=''>+880 1789478967</p>
                </div>
            </div>
            <div className='col-span-1'>
                <Image className='lg:h-72 w-full relative object-cover' src={ContactMe} alt='contact' />

            </div>
        </div>
    )
}
