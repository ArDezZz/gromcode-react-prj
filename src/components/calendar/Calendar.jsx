import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, isVisible, showCreateMenu, weekStartDate }) => {
  const [allEvents, setEvents] = useState([
    {
      id: 1,
      title: 'Go to the gym',
      description: 'some text here',
      dateFrom: new Date(2022, 6, 4, 10, 15),
      dateTo: new Date(2022, 6, 4, 12, 0),
    },
  ]);

  const createEvent = value => {
    const newEvent = {
      id: Math.random(),
      title: value.title,
      date: new Date(value.date),
      dateFrom: new Date(value.dateFrom),
      dateTo: new Date(value.dateTo),
      description: value.description,
    };
    setEvents([...allEvents, newEvent]);
  };

  return (
    <section className="calendar">
      {isVisible ? <Modal createEvent={createEvent} showCreateMenu={showCreateMenu} /> : null}
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
