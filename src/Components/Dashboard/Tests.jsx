import React from "react";
const testData = [
  {
    name: "فيزيک",
    topic: "تستی",
    testType: "فصل 3",
    date: "11 / 16",
    time: "16",
    remainingTime: "240 : 75 : 26",
    link: "ورود به آزمون",
  },
  {
    name: "زیست",
    topic: "تستی",
    testType: "فصل 5",
    date: "11 / 25",
    time: "18",
    remainingTime: "456 : 75 : 26",
    link: "ورود به آزمون",
  },
  {
    name: "ادبیات",
    topic: "تستی",
    testType: "درس 12",
    date: "11 / 30",
    time: "11",
    remainingTime: "624 : 75 : 26",
    link: "ورود به آزمون",
  },
  {
    name: "فيزيک",
    topic: "تستی",
    testType: "فصل 3",
    date: "11 / 16",
    time: "16",
    remainingTime: "240 : 75 : 26",
    link: "ورود به آزمون",
  },
];
const Tests = () => {
  return (
    <div className="bg-white px-4 pt-2 mt-4 rounded-lg shadow-lg ">
      <p className="font-bold text-gray-800">آزمون های پيش رو</p>
      <div className="h-[130px] overflow-y-scroll">
        <table className=" text-gray-700 text-sm border-separate border-spacing-x-5 border-spacing-y-[7px]">
          <thead className="bg">
            <tr>
              <th>نام درس</th>
              <th>مبحث</th>
              <th>نوع آزمون</th>
              <th>تاریخ برگزاری</th>
              <th>ساعت</th>
              <th>زمان باقیمانده تا آزمون</th>
              <th>لینک آزمون</th>
            </tr>
          </thead>
          <tbody>
            {testData.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.topic}</td>
                  <td>{item.testType}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.remainingTime}</td>
                  <td>
                    <a href="#">
                      <button className="bg-primaryColor text-[15px] px-4 py-1 rounded-md text-white">
                        {item.link}
                      </button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tests;
