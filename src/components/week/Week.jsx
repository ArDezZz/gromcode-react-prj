import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events }) => {
  console.log(events);
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        //getting all events from the day we will render

        const dayEvents = events.filter(event => {
          // console.log(`dayEnd ${new Date(dayEnd)}`);
          // console.log(`dayStart ${dayStart}`);
          // console.log(`dateFrom ${new Date(event.dateFrom)}`);
          // console.log(`dateTo ${new Date(event.dateTo)}`);
          // console.log(
          //   new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < new Date(dayEnd),
          // );
          return new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < new Date(dayEnd);
        });

        return <Day key={dayStart.getDate()} dataDay={dayStart.getDate()} dayEvents={dayEvents} />;
      })}
    </div>
  );
};

export default Week;
