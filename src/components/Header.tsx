import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full text-right p-5 flex justify-end bg-slate-200'>
            <SignedIn>
            <UserButton afterSignOutUrl="/" showName />
            </SignedIn>
        </div>
    )
}

export default Header