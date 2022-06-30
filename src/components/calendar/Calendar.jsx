import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, isVisible, changeMenu }) => {
  const [allEvents, setEvents] = useState(events);

  return (
    <section className="calendar">
      {isVisible ? <Modal changeMenu={changeMenu} /> : null}
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={allEvents} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
