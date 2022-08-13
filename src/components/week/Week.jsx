import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';
import './week.scss';

const Week = ({ weekDates, events, handleFetchEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.filter(
          event => new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < new Date(dayEnd),
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            handleFetchEvents={handleFetchEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  deleteEvent: PropTypes.func,
};
