import React from "react";

//Components
import Charts from "./Charts/Charts";
import Tests from "./Tests";

//Icons
import handIcon from "../../assets/SVG/hand.svg";
import searchIcon from "../../assets/SVG/search.svg";
import filterIcon from "../../assets/SVG/filter.svg";
import messageIcon from "../../assets/SVG/Message.svg";
import notifIcon from "../../assets/SVG/notif.svg";

const Dashboard = () => {
  return (
    <div className="flex bg-primaryColor w-full">
      <div className="bg-[#f9f9f9] rounded-r-[35px]">
        <nav className="flex mt-4 mx-8 w-[900px] justify-between">
          <div className="flex">
            <p>سلام شيما خوش آمدی!</p>
            <img className="w-8 h-8" src={handIcon} alt="handIcon" />
          </div>
          <div className="flex w-[450px] px-2 h-8 bg-white rounded-lg shadow-md">
            <img className="w-4 h-4 self-center ml-1" src={searchIcon} alt="searchIcon" />
            <input className="px-6 w-full outline-none font-2" type="text" placeholder="جست و جوی کلاس, استاد, تکالیف و ..."/>
            <img className="w-4 h-4 self-center mr-1" src={filterIcon} alt="fiterIcon" />
          </div>
          <div className="flex mr-4">
            <div className="w-8 h-8 bg-white rounded-lg relative after:content-['12'] after:w-4 after:h-4 after:bg-primaryColor after:top-[2px] after:right-[2px] after:absolute after:text-white after:rounded-full after:text-center after:text-xs shadow-md">
                <img className="m-auto relative top-2" src={notifIcon} alt="" />
            </div>
            <div className="w-8 h-8 mr-4 bg-white rounded-lg relative after:content-['5'] after:w-4 after:h-4 after:bg-primaryColor after:top-[2px] after:right-[2px] after:absolute after:text-white after:rounded-full after:text-center after:text-xs shadow-md">            
                <img className="m-auto relative top-2" src={messageIcon} alt="" />
            </div>
          </div>
        </nav>
        <section className="mx-8 mt-6 w-[900px]">
          <Charts/>
          <Tests/>
        </section>
      </div>
      <div className="w-full">
        {/* <BarChart/> */}
      </div>
    </div>
  );
};

export default Dashboard;
