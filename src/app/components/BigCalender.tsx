"use client";

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';
import { calendarEvents } from '../../../data';

const localizer = momentLocalizer(moment);

export const BigCalender = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const onChangeFunction = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div style={{ height: "90vh", padding: "1rem" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={onChangeFunction}
        min={new Date(0, 0, 0, 8, 0)} 
        max={new Date(0, 0, 0, 17, 0)} 
        style={{ height: "100%" }}
        date={new Date(2025, 6, 14)} 
      />
    </div>
  );
};

export default BigCalender;
