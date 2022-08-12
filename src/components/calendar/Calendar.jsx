import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEventsList, createEvent } from '../../gateway/gateway';
import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, isVisible, showModalMenu }) => {
  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    fetchEventsList().then(res => setEvents(res));
  }, []);

  return (
    <section className="calendar">
      {isVisible ? (
        <Modal showModalMenu={showModalMenu} allEvents={allEvents} setEvents={setEvents} />
      ) : null}
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

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  isVisible: PropTypes.bool,
  showModalMenu: PropTypes.func,
};
