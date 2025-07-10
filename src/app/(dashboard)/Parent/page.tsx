import Announcements from "@/app/components/Announcements";
import { BigCalender } from "@/app/components/BigCalender";
import React from "react";

const Parentpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="">Scheadule(PM)</h1>
        <BigCalender/>
      </div>
      </div>
      <div className="w-full lg:w-1/3 gap-4 flex flex-col">
        <Announcements />
      </div>
    </div>
  );
};

export default Parentpage;
