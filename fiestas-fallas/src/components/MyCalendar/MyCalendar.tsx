import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set up the localizer by providing moment (or globalize) to the correct localizer.
const localizer = momentLocalizer(moment);

// Define some events
const myEventsList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2023, 3, 0),
    end: new Date(2023, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2023, 3, 7),
    end: new Date(2023, 3, 10),
  },
  // Add more events as needed
];

const MyCalendar: React.FC = () => (
  <div style={{ height: 700 }}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
