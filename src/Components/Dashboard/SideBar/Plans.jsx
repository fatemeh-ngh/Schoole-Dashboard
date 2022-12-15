import React from "react";

//SVG
import time from "../../../assets/SVG/Time.svg";
import notif from "../../../assets/SVG/notif.svg";

const data = [
  {
    name: "فیزیک",
    date: "15:30-17",
  },
  {
    name: "عربی",
    date: "17:30-19",
  },
  {
    name: "مشاوره",
    date: "19-19:45",
  },
];

const Plans = () => {
  return (
    <div className="mt-4">
      <p className="mb-4 text-primaryColor">برنامه امروز</p>
      {data.map((item) => {
        return (
          <div className="flex justify-between ml-8 mb-2 bg-white px-4 py-[11px] rounded-2xl shadow-lg">
            <div className="flex justify-between">
              <span className="w-4 h-4 ml-6 self-center rounded-full bg-primaryColor"></span>
              <div>
                <div className="flex mb-1">
                  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_110_15)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7925 0.310303C16.2587 0.310303 16.6371 0.660858 16.6371 1.09279L16.6376 1.97733C18.2818 2.08177 19.6474 2.60357 20.6139 3.50088C21.6691 4.48265 22.2243 5.89426 22.2187 7.58757V17.1058C22.2187 20.5821 19.8358 22.7418 16.0014 22.7418H6.47676C2.64237 22.7418 0.259521 20.5519 0.259521 17.0265V7.58548C0.259521 4.30653 2.38455 2.20178 5.85029 1.97769L5.85098 1.09279C5.85098 0.660858 6.22936 0.310303 6.69556 0.310303C7.16177 0.310303 7.54015 0.660858 7.54015 1.09279L7.53981 1.95771H14.9473L14.9479 1.09279C14.9479 0.660858 15.3263 0.310303 15.7925 0.310303ZM20.5295 9.60003H1.94868V17.0265C1.94868 19.7036 3.55676 21.1768 6.47676 21.1768H16.0014C18.9214 21.1768 20.5295 19.7308 20.5295 17.1058L20.5295 9.60003ZM14.9473 3.52269H7.53981L7.54015 4.52636C7.54015 4.9583 7.16177 5.30885 6.69556 5.30885C6.22936 5.30885 5.85098 4.9583 5.85098 4.52636L5.85038 3.54637C3.32764 3.74272 1.94868 5.15951 1.94868 7.58548V8.03505H20.5295L20.5295 7.58548C20.534 6.29698 20.1601 5.29539 19.418 4.6068C18.7666 4.00147 17.8143 3.63996 16.638 3.54687L16.6371 4.52636C16.6371 4.9583 16.2587 5.30885 15.7925 5.30885C15.3263 5.30885 14.9479 4.9583 14.9479 4.52636L14.9473 3.52269Z" fill="#4e4e4e"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_110_15">
                      <rect width="21.9592" height="23.3966" fill="white" transform="translate(0.259521 0.310303)"/>
                      </clipPath>
                      </defs>
                  </svg>
                  <p className="mr-3 text-sm">{item.name}</p>
                </div>
                <div className="flex">
                  <img className="w-4" src={time} alt="time icon" />
                  <p className="mr-4 text-[12px] text-gray-500">{item.date}</p>
                </div>
              </div>
            </div>
            <img className="self-start w-4" src={notif} alt="notif icon" />
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
