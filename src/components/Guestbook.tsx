import React, { useState } from 'react';
import { BiTrash } from "react-icons/bi";
import { type Session } from 'next-auth';

import { api } from "../utils/api";

import Account from './Account';

const Signature: React.FC<{
    id: string,
    name: string,
    message: string,
    createdAt: string,
    email: string,
    session: Session | null,
}> = ({
    id, name, message, createdAt, email, session,
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    // const ctx = api.useContext();

    const gb = api.guestbook.deleteMessage.useMutation();

    const handleDelete = () => {
        gb.mutate({ id, email });
        return setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="box flex flex-col">
                    <p className="text-sm text-glow-neutral-500">{message}</p>
                    <p className="mt-2 text-xs text-neutral-500 flex flex-wrap items-center justify-start gap-2">
                        ~ {name}
                        <span className='text-neutral-600'> / {createdAt}</span>
                        {session?.user.email == email && (
                            <>
                                <p className="text-neutral-600">/</p>
                                <button
                                    className='text-red-500 hover:text-red-400'
                                    onClick={() => handleDelete()}
                                >
                                    <BiTrash fill='#ef4444' />
                                </button>
                            </>
                        )}
                    </p>
                </div>
            )}
        </>
    )
}

const Form: React.FC<{ session: Session | null }> = ({ session }) => {
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const ctx = api.useContext();

    const gb = api.guestbook.postMessage.useMutation({
        onMutate: async () => {
            await ctx.guestbook.getAll.cancel();

            const prevData = ctx.guestbook.getAll.getData();
            if (prevData) ctx.guestbook.getAll.setData(undefined, prevData);

            return { prevData }
        },
        onSettled: async () => {
            try {
                await ctx.guestbook.getAll.invalidate();
            } catch (e) {
                console.error(e)
            }
        }
    });

    const handleSubmit = () => {
        setLoading(true);

        if (message?.length === 0) {
            setLoading(false);
            setError("Your message is empty");
            return;
        }

        if (message?.length >= 100) {
            setLoading(false);
            setError("Your message should be less than or equals to 100 characters");
            return;
        }

        gb.mutate({
            email: session?.user?.email as string,
            message,
        })

        setMessage("");
        setLoading(false);
    }

    if (session) {
        return (
            <div className="w-full flex flex-col items-center md:items-start gap-5">
                <div className="w-full relative flex flex-col items-center md:items-start gap-2">
                    <input
                        type="text"
                        name="message"
                        id="message"
                        value={message}
                        placeholder="Your Message..."
                        onChange={(e) => setMessage(e.target.value)}
                        className="relative text-xs text-neutral-300 block w-full bg-transparent border-2 border-neutral-700 focus:border-neutral-600 outline-none px-4 py-2 rounded-lg"
                    />
                    <p className="absolute top-2.5 right-2.5 font-semibold text-xs text-neutral-700">{message?.length}/100</p>
                    {error && (
                        <p className="text-xs text-red-500">{error}</p>
                    )}
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        onClick={() => handleSubmit()}
                        className="text-xs font-bold text-green-300 bg-green-500 bg-opacity-20 hover:bg-opacity-50 border-2 border-green-500 rounded-lg px-4 py-2 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
        </>
    )
}

const Guestbook: React.FC<{ session: Session | null }> = ({ session }) => {
    const { data: messages } = api.guestbook.getAll.useQuery();

    return (
        <>
            <div className="w-full flex flex-col rounded-xl bg-neutral-900/50 gap-10">
                <div className='bg-neutral-800/50 p-5 rounded-xl flex flex-col gap-5'>
                    <Account session={session} />
                    <Form session={session} />
                </div>

                {messages?.map((msg: typeof messages[0], index: number) => {
                    if (msg.hidden) {
                        return;
                    }

                    return (
                        <div className="flex flex-col justify-center items-start" key={index}>
                            <Signature
                                key={index}
                                id={msg.id}
                                session={session}
                                email={msg.email}
                                name={msg.user.name ?? "undefined"}
                                message={msg.message}
                                createdAt={msg.createdAt?.toString().slice(0, 16) ?? "undefined"}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Guestbook;
