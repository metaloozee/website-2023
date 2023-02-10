import React from "react";
import clsx from "clsx";

import { SiDiscord, SiVisualstudiocode } from "react-icons/si";

const Discord: React.FC<{ status: string, activities: object[] }> = ({ status, activities }) => {
    return (
        <>
            <div className={clsx(
                'group flex h-full w-full flex-col gap-10 justify-between overflow-hidden rounded-2xl text-white',
                {
                    online: 'bg-green-500 text-green-50',
                    idle: 'bg-orange-400 text-orange-50 ',
                    dnd: 'bg-red-500 text-red-50 ',
					offline: 'bg-indigo-500 text-white/90 ',
                }[status]
            )}>
                <span className="h-full flex flex-col justify-between px-6 pt-6">
                    <span className="flex justify-between">
                        <SiDiscord className="text-3xl" />
                    </span>

                    <span className="space-y-0.5 pb-6">
                        <span className="block font-bold">{status}</span>
                        <span className="block font-semibold text-sm truncate">metalooze#0499</span>
                        <span className="block text-xs">
                            {activities.map((a: any) => (a.name == "Code") ? a.details : "")}
                        </span>
                    </span>
                </span>
            </div>
            {/* <div className={clsx(
                'rounded-xl p-10 flex justify-center h-full',
                {
                    online: 'bg-green-500 text-green-50 ',
                    idle: 'bg-orange-400 text-orange-50 ',
                    dnd: 'bg-red-500 text-red-50 ',
					offline: 'bg-indigo-500 text-white/90 ',
                }[status]
            )}>
                <div className="w-full flex gap-10 flex-col justify-between items-start">
                    <SiDiscord size={30} />

                    <div className="flex flex-col justify-center items-start gap-2">
                        <h1 className="font-bold">metalooze#0499</h1>
                        <h1 className="text-xs">
                            {activities.map((a: any) => (a.name == "Code") ? a.details : "")}
                        </h1>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Discord;