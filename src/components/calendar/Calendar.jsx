import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents } from '../../gateway/gateway';
import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, isVisible, showModalMenu }) => {
  const [allEvents, setEvents] = useState([]);

  const fetchEventsList = () => {
    fetchEvents().then(res => setEvents(res));
  };

  useEffect(() => {
    fetchEventsList();
  }, []);

  return (
    <section className="calendar">
      {isVisible ? <Modal showModalMenu={showModalMenu} fetchEventsList={fetchEventsList} /> : null}
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={allEvents} fetchEventsList={fetchEventsList} />
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
