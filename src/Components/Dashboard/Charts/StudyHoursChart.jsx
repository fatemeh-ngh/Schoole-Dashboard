import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
};

const labels = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "َساعات مطالعه",
      data: [2, 8, 5, 6, 4, 2, 9, 10],
      backgroundColor: ["#7582F9"],
    },
  ],
};
const StudyHoursChart = () => {
  return (
    <div className="w-[440px] h-52 bg-white rounded-lg p-4 mt-4 shadow-lg">
      <div className="flex justify-between">
        <p>نمودار ساعات مطالعه</p>
        <p>هفته اول بهمن</p>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default StudyHoursChart;
