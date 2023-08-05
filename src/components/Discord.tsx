/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import clsx from "clsx";

import { SiDiscord } from "react-icons/si";

const Discord: React.FC<{ status: string; activities: object[] }> = ({
  status,
  activities,
}) => {
  return (
    <>
      <div
        className={clsx(
          "group flex h-full w-full flex-col justify-between gap-10 overflow-hidden rounded-2xl text-white",
          {
            online: "bg-green-500 text-green-50",
            idle: "bg-orange-400 text-orange-50 ",
            dnd: "bg-red-500 text-red-50 ",
            offline: "bg-indigo-500 text-white/90 ",
          }[status]
        )}
      >
        <span className="flex h-full flex-col justify-between px-6 pt-6">
          <span className="flex justify-between">
            <SiDiscord className="text-3xl" />
          </span>

          <span className="space-y-0.5 pb-6">
            <span suppressHydrationWarning className="block font-bold">
              {status}
            </span>
            <span className="block truncate text-sm font-semibold">
              metalooze#0499
            </span>
            <span suppressHydrationWarning className="block text-xs">
              {activities.map((a: any) => (a.name == "Code" ? a.details : ""))}
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default Discord;
