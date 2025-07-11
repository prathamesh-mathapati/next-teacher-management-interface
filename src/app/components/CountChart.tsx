"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
     {
    name: "Total",
    count: 100,
    fill: "#FFF",
  },
  {
    name: "Girls",
    count: 55,
    fill: "#00ccff52",
  },
  {
    name: "Boys",
    count: 45,
    fill: "#e996104d",
  },
  
 
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image alt="" src={"/moreDark.png"} height={20} width={20} />
      </div>
      <div className="flex justify-between items-center">
        <div className="h-[75%] w-full relative">
        <ResponsiveContainer width="100%" height={300} >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src={"/maleFemale.png"} alt="" width={100} height={100} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-[var(--pm-s)] rounded-full"/>
            <h1 className="font-bold">123</h1>
            <h2 className="text-xs text-gray-300">Boys (44%)</h2>
        </div>
                <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-[var(--pm-o)] rounded-full"/>
            <h1 className="font-bold">123</h1>
            <h2 className="text-xs text-gray-300">Boys (44%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
