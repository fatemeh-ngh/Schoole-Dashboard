import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["باقيمانده", "پرداخت شده"],
  datasets: [
    {
      label: "تومان",
      data: [700000, 5300000],
      backgroundColor: ["#aa0000", '#00aa00'],
      borderRadius: 4,
    },
  ],
}

const BarChart = () => {
  return (
    <div className="flex justify-between  bg-white px-2 rounded-lg shadow-md py-1">
      <div className="flex flex-col self-center">
        <p className="text-lg">شهريه</p>
        <p className="text-[12px] text-red-500 mt-1">باقيمانده : 700.000 تومان</p>
        <p className="text-[9px] text-green-600 mt-1">پرداخت شده : 5.300.000 تومان</p>
      </div>
      <div className="w-32 self-center pr-4">
        <Doughnut data={data}/>
      </div>
    </div>
  );
};

export default BarChart;
