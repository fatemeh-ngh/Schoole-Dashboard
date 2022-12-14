import React from "react";

const Tests = () => {
  return (
    <div className="bg-white px-4 pt-2 mt-4 rounded-lg shadow-lg ">
      <p className="font-bold text-gray-800">آزمون های پيش رو</p>
      <div className="h-28 overflow-y-scroll">
        <table className=" text-gray-700 text-sm border-separate border-spacing-x-5 border-spacing-y-2">
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
            <tr>
              <td>فیزیک</td>
              <td>فصل 3</td>
              <td>تستی</td>
              <td>11/16</td>
              <td>16</td>
              <td>240:75:26</td>
              <td>
                <a href="#">
                  <button className="bg-primaryColor text-[15px] px-4 py-2 rounded-md text-white">
                    ورود به آزمون
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>زیست</td>
              <td>فصل 5</td>
              <td>تستی</td>
              <td>11/25</td>
              <td>18</td>
              <td>456:75:26</td>
              <td>
                <a href="#">
                  <button className="bg-primaryColor text-[15px] px-4 py-2 rounded-md text-white">
                    ورود به آزمون
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>ادبیات</td>
              <td>درس 12</td>
              <td>تستی</td>
              <td>11/30</td>
              <td>11</td>
              <td>624:75:26</td>
              <td>
                <a href="#">
                  <button className="bg-primaryColor text-[15px] px-4 py-2 rounded-md text-white">
                    ورود به آزمون
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>ادبیات</td>
              <td>درس 12</td>
              <td>تستی</td>
              <td>11/30</td>
              <td>11</td>
              <td>624:75:26</td>
              <td>
                <a href="#">
                  <button className="bg-primaryColor text-[15px] px-4 py-2 rounded-md text-white">
                    ورود به آزمون
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>ادبیات</td>
              <td>درس 12</td>
              <td>تستی</td>
              <td>11/30</td>
              <td>11</td>
              <td>624:75:26</td>
              <td>
                <a href="#">
                  <button className="bg-primaryColor text-[15px] px-4 py-2 rounded-md text-white">
                    ورود به آزمون
                  </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>ادبیات</td>
              <td>درس 12</td>
              <td>تستی</td>
              <td>11/30</td>
              <td>11</td>
              <td>624:75:26</td>
              <td>
                <a href="#">
                  <button className="bg-primaryColor text-[15px] px-4 py-2 rounded-md text-white">
                    ورود به آزمون
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tests;
