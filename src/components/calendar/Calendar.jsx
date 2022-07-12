import React, { useEffect, useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, isVisible, showCreateMenu }) => {
  const [allEvents, setEvents] = useState([]);
  const baseUrl = 'https://62c5975d134fa108c256f212.mockapi.io/Calendar';
  //algo
  //создаем ивент и отправляем на сервер
  //делаем запрос ивентов с сервера
  //записываем ивенты в стейт

  const fetchEventsList = () =>
    fetch(baseUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(res => setEvents(res))
      .catch(() => alert("Internal Server Error. Can't display events"));

  useEffect(() => {
    return fetchEventsList;
  }, []);

  const createEvent = event => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(event),
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error();
      })
      .catch(() => {
        alert("Internal Server Error. Can't display events");
      });

    fetchEventsList();
  };

  const deleteEvent = eventId => {
    fetch(`${baseUrl}/${eventId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error();
      })
      .catch(() => {
        alert("Internal Server Error. Can't display events");
      });
    return setEvents(allEvents.filter(event => event.id !== eventId));
  };

  return (
    <section className="calendar">
      {isVisible ? <Modal createEvent={createEvent} showCreateMenu={showCreateMenu} /> : null}
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={allEvents} deleteEvent={deleteEvent} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
