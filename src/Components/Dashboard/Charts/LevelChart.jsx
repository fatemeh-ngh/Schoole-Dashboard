import React from "react";
import { Chart as ChartJS, PointElement, LineElement } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(PointElement, LineElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: 'نمودار رشد تراز',
    // },
  },
};

const labels = ["مهر", "آبان", "آذر", "دی", "بهمن"];

export const data = {
  labels,
  datasets: [
    {
      label: "تراز",
      data: [7200, 6300, 6700, 8000, 7600, 3000, 9000],
      fill: true,
      borderColor: "#7582F9",
      tension: 0.5,
    },
  ],
};
const LevelChart = () => {
  return (
    <div className="w-[440px] h-52 bg-white p-4 rounded-lg shadow-lg mt-4">
      <p>نمودار رشد تراز</p>
      <Line data={data} />
    </div>
  );
};

export default LevelChart;
