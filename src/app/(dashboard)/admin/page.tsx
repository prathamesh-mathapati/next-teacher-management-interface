import Announcements from "@/app/components/Announcements";
import AttendsChart from "@/app/components/AttendsChart";
import Calender from "@/app/components/Calender";
import CountChart from "@/app/components/CountChart";
import Finalchart from "@/app/components/Finalchart";
import { UserCads } from "@/app/components/UserCads";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCads type="student" />
          <UserCads type="teacher" />
          <UserCads type="parent" />
          <UserCads type="staff" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendsChart/>
          </div>
        </div>

        <div className="w-full h-[500px]">
          <Finalchart/>
        </div>
      </div>

      <div className="w-full lg:w-1/3 gap-4 flex flex-col">
      <Calender/>
      <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;
