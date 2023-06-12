import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className="relative">
                <header className='flex pt-10 absolute m-auto left-0 right-0 w-[1200px]'>
                    <nav className='w-1/2 flex flex-row items-center'>
                        <Image src="/../public/images/logo.png" width={36} height={36} />
                        <p className='text-base ml-2.5'>Hounter</p>
                    </nav>
                    <nav className='w-1/2 flex items-center justify-center text-sm text-white font-semibold'>
                        <Link href="/" className='mr-6 bg-white/[.1] px-4 py-2 border border-white/[.3] rounded-3xl'>About Us</Link>
                        <Link href="/" className='mr-6 bg-white/[.1] px-4 py-2 border border-white/[.3] rounded-3xl'>Article</Link>
                        <Link href="/" className='mr-14 bg-white/[.1] px-4 py-2 border border-white/[.3] rounded-3xl'>Property</Link>
                        <Link href="/" className='bg-[#D1FAE5] text-[#047857] px-4 py-2 border border-white/[.3] rounded-3xl'>Sign Up!</Link>
                    </nav>

                </header>
            </div>
        </>
    )
}

export default Navbar