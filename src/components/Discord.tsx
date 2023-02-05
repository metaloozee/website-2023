import React from "react";
import clsx from "clsx";

import { SiDiscord } from "react-icons/si";

const Discord: React.FC<{ status: string, activities: object[] }> = ({ status, activities }) => {
    return (
        <>
            <div className={clsx(
                'rounded-xl p-10 flex justify-center h-full',
                {
                    online: 'bg-green-500 text-green-50 ',
                    idle: 'bg-orange-400 text-orange-50 ',
                    dnd: 'bg-red-500 text-red-50 ',
					offline: 'bg-indigo-500 text-white/90 ',
                }[status]
            )}>
                <div className="w-full flex flex-col justify-between items-start">
                    <SiDiscord size={30} />

                    <div className="flex flex-col justify-center items-start gap-2">
                        <h1 className="font-bold">metalooze#0499</h1>
                        <h1 className="text-xs">
                            {activities.map((a: any) => (a.name == "Code") ? a.details : "")}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discord;