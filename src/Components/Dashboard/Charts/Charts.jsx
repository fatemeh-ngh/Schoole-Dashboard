import React from "react";

//Charts
import DoughnutChart from "./Doughnut";
import BarChart from "./Bar";
import level from "../../../assets/SVG/level.svg";
import StudyHoursChart from "./StudyHoursChart";
import LevelChart from "./LevelChart";

const Charts = () => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <DoughnutChart />
        <BarChart />
        <div className="flex bg-white px-2 rounded-lg shadow-md py-1">
          <div className="flex flex-col w-24 self-center">
            <p className="text-lg">رتبه در پايه: اول</p>
          </div>
          <div className="mr-4 self-center">
            <img className="h-[80px]" src={level} alt="level" />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <StudyHoursChart />
        <LevelChart />
      </div>
    </div>
  );
};

export default Charts;
