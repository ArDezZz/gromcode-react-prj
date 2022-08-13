import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';
import './day.scss';

const Day = ({ dataDay, dayEvents, fetchEventsList }) => {
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
            fetchEventsList={fetchEventsList}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dataDay: PropTypes.object,
  dayEvents: PropTypes.array,
  fetchEventsList: PropTypes.func,
};
