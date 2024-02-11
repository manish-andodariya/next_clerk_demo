
'use client';

import { SignedIn, useClerk } from '@clerk/nextjs';
import { Avatar } from 'flowbite-react';

import React from 'react'

const NextAvatar = () => {
    const { user } = useClerk()

    return (
        <SignedIn>
            <Avatar img={user?.imageUrl} rounded>
                <div className="space-y-1 font-medium text-s dark:text-white">
                    <div>{user?.fullName}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{user?.primaryEmailAddress?.emailAddress}</div>
                </div>
            </Avatar>
        </SignedIn>
    )
}

export default NextAvatar
