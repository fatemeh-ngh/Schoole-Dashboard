import React from "react";
import { Doughnut } from "react-chartjs-2";

export const data = {
  labels: ["پيشرفت درسی"],
  datasets: [
    {
      label: "درصد",
      data: [25,75],
      backgroundColor: ["#7582F9", '#fff'],
      borderRadius: 0
    },
  ],
};
const DoughnutChart = () => {
  return (
    <div className="flex justify-between w-56 bg-white px-2 rounded-lg shadow-md py-1">
      <div className="flex flex-col self-center">
        <p className="text-lg">درصد رشد</p>
        <p className="text-[12px] text-[#4e4e4e] mt-1">ميانگين تراز : 6900</p>
      </div>
      <div className="w-32 self-center pr-4">
        <Doughnut data={data}/>
      </div>
    </div>
  );
};

export default DoughnutChart;
