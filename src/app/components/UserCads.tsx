import Image from "next/image";
import React from "react";

export const UserCads = ({ type }: { type: string }) => {
  return (
    <div className=" rounded-2xl odd:bg-[var(--pm-o)] even:bg-[var(--pm-s)] p-4 flex-1 min-w-[135px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white rounded-full text-green-600 px-2 py-1">2024/25</span>
        <Image alt="" src={"/more.png"} height={20} width={20} />
      
      </div>
        <h1 className="text-2xl font-semibold my-4">1234</h1>
        <h2 className=" capitalize text-sm text-gray-500">{type}</h2>
    </div>
  );
};
