import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => new Date(event.dateFrom).getHours() === hour);

        return (
          <Hour
            day={dataDay}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;
