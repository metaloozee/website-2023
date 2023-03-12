/* eslint-disable @typescript-eslint/no-misused-promises */

import * as React from 'react';

import { type Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';

import Image from 'next/image';

const Account: React.FC<{ session: Session | null }> = ({ session }) => {
    if (!session) {
        return (
            <>
                <div className='w-full rounded-xl flex flex-col gap-5 md:flex-row md:justify-between md:items-center'>
                    <h1 className='text-xs'>please sign in with discord to leave a comment blow.</h1>
                    <button
                        onClick={() => signIn("discord")}
                        className='border-2 border-indigo-500 bg-indigo-500/20 hover:bg-indigo-500/50 text-indigo-300 px-4 py-2 rounded-xl text-xs font-bold'
                    >
                        Sign In
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-full rounded-xl flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <Image
                        src={session.user.image ?? ""}
                        alt={session.user.name ?? ""}

                        width={70}
                        height={70}
                        className='rounded-xl'
                        suppressHydrationWarning
                    />
                    <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
                        <h1 suppressHydrationWarning className='text-glow-neutral-500 font-bold'>{session.user.name}</h1>
                        <h1 suppressHydrationWarning className="text-xs text-neutral-500 truncate">{session.user.email}</h1>
                    </div>
                </div>
                <button
                    onClick={() => signOut()}
                    className='px-4 py-2 rounded-xl font-bold text-xs bg-red-500/20 border-2 border-red-500 text-red-300 hover:bg-red-500/50'
                >
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default Account;