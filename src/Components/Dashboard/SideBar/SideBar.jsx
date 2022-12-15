import React from "react";
import CalendarComponent from "./Calendar";
import Plans from "./Plans";

//SVG
import profile from "../../../assets/SVG/profile.svg";
import editIcon from "../../../assets/SVG/Edit-Square.svg";

const SideBar = () => {
  return (
    <div>
      <div className="flex justify-between py-4 pl-8 pr-0">
        <div className="flex">
          <img src={profile} alt="profile image" />
          <div className="mr-4">
            <h3>َشيما احمدزاده</h3>
            <p className="text-sm text-gray-400">دانش آموز</p>
          </div>
        </div>
        <img className="self-start" src={editIcon} alt="" />
      </div>
      <CalendarComponent />
      <Plans/>
    </div>
  );
};

export default SideBar;
