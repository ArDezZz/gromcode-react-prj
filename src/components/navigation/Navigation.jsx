import React from 'react';
import moment from 'moment';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        const currentDay = moment(new Date()).format('LL') === moment(dayDate).format('LL');
        return (
          <div
            key={dayDate}
            className={
              currentDay
                ? 'calendar__day-label day-label currentDay'
                : 'calendar__day-label day-label'
            }
          >
            <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
            <span className={currentDay ? 'currentDay__number' : 'day-label__day-number'}>
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
