import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-blue-950 h-44 text-white flex flex-col gap-5 py-2'>
            <div className='first flex gap-2 items-center justify-between ml-20 mr-20'>
                <div className='flex items-center'><Image src="/phone.webp" alt='Phone-icon' height={100} width={100} className='h-10 w-10' />
                    <p className=''>Download App via SMS</p></div>
                <p className='ml-96'>Sign In | Sign Up</p>
            </div>
            <div className='second border-t-1 mx-20'></div>
            <div className='third flex justify-between mx-20'>
                <div className='logo'><Image src={"/logo.webp"} alt='logo' height={500} width={500} className='w-[200px]' /></div>
                <div className='navigation'>
                    <ul className='flex gap-12'>                                                                                                        
                        <li>New Cars</li>
                        <li>New Cars</li>
                        <li>New Cars</li>
                        <li>New Cars</li>
                        <li>New Cars</li>
                        <li>New Cars</li>
                        <li>New Cars</li>  
                    </ul>
                </div>
                <div className='button'><button className='bg-red-700 px-4 py-2 rounded-md'>Post an Ad</button></div>
            </div>
        </div>
    )
}

export default Header