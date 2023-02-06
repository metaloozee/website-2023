import React from "react";
import { LanyardResponse, Data } from "use-lanyard";
import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";

import { BsSpotify } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

export const SUPPORTS_INTL = typeof Intl !== 'undefined';

export const formatList = (list: string[], type: Intl.ListFormatType): string => {
	if (SUPPORTS_INTL) {
		return new Intl.ListFormat('en-US', {type}).format(list);
	}

	return list.join(', ');
}

const Spotify: React.FC<{ lanyard: Data }> = ({ lanyard }) => {
    
    return (
        <>
            {!lanyard.spotify || !lanyard.spotify.album_art_url ? (
                <Link
                    suppressHydrationWarning
                    href="https://open.spotify.com/playlist/5dghrMaTeDO6YrZqpKH0hN"
                    className={clsx('group relative flex h-full w-full rounded-xl')}
                >
                    <span className="absolute inset-0 -z-10">
                        <Image
                            src={'https://i.scdn.co/image/ab67706c0000da84e581815a92946c295b02b936'}
                            className="bg-black brightness-50 rounded-xl"
                            fill
                            alt="Album cover"
                            style={{ objectFit: 'cover' }}
                        />
                    </span>

                    <span className="flex flex-1 flex-col justify-between p-10 text-white">
                        <span className="flex justify-between">
                            <BsSpotify className="text-2xl" />
                            <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
                        </span>

                        <div className="space-y-0.5">
                            <h1 className="text-semibold">
                                playlist: shit
                            </h1>

                            <p className="text-xs">because you had to get a 3 hour bus journey in the early hours</p>
                        </div>
                    </span>
                </Link>
            ) : (
                <Link
                    key={lanyard.spotify.track_id}
                    suppressHydrationWarning
                    href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx('group relative flex h-full w-full rounded-xl overflow-hidden')}
                >
                    <span className="absolute inset-0 -z-10">
                        <Image
                            suppressHydrationWarning
                            src={lanyard.spotify.album_art_url}
                            className="rounded-xl bg-black brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4] group-hover:saturate-0"
                            fill
                            alt="Album cover art"
                            style={{objectFit: 'cover'}}
                        />
                    </span>

                    <span suppressHydrationWarning className="flex gap-10 flex-1 flex-col justify-between p-6 text-white">
                        <span className="flex justify-between">
                            <BsSpotify className="text-2xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
                        </span>

                        <span>
                            <h1 className="text-sm">
                                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
                                
                                Listening to {' '}
                                <span className="font-bold" suppressHydrationWarning>
                                    {lanyard.spotify.song}
                                </span>
                                {' '}
                                by {' '}
                                <span className="font-bold" suppressHydrationWarning>
                                    {formatList(lanyard.spotify.artist.split('; '), 'conjunction')}
                                </span>
                            </h1>
                        </span>
                    </span>
                </Link>
            )}
        </>
    )
}

export default Spotify;