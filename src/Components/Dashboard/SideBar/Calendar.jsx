import React from "react";
import { Calendar } from "@react-shamsi/calendar";
import "@react-shamsi/calendar/dist/styles.css";

const CalendarComponent = () => {
  return (
    <div className="ml-8 h-[300px] overflow-hidden rounded-lg shadow-lg">
      <Calendar className="bg" showFooter={false} showGoToToday={false}/>
    </div>
  );
};

export default CalendarComponent;
