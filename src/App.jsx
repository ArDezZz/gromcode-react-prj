import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import events from './gateway/events.js';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isVisible, changeEventVisible] = useState(false);

  // algo CreateEvent
  //1 создаем функцию createEvent в App
  //2 прокидываем функцию в modal
  //3 считываем данные с modal
  //4 пушим созданный объект в events

  const createEvent = value => {
    const newEvent = {
      id: Math.random(),
      title: value.title,
      date: new Date(value.date),
      dateFrom: new Date(value.dateFrom),
      dateTo: new Date(value.dateTo),
      description: value.description,
    };
    console.log(newEvent);
    events.push(newEvent);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const nextWeekChange = () => {
    const nextWeek = new Date(weekStartDate).setDate(weekStartDate.getDate() + 7);
    setWeekStartDate(new Date(nextWeek));
  };

  const prevWeekChange = () => {
    const prevWeek = new Date(weekStartDate).setDate(weekStartDate.getDate() - 7);
    setWeekStartDate(new Date(prevWeek));
  };

  const todayWeek = () => {
    setWeekStartDate(new Date());
  };

  const showCreateMenu = () => {
    changeEventVisible(!isVisible);
  };

  return (
    <>
      <Header
        weekDates={weekDates}
        nextWeek={nextWeekChange}
        prevWeek={prevWeekChange}
        todayWeek={todayWeek}
        showCreateMenu={showCreateMenu}
      />
      <Calendar
        weekDates={weekDates}
        isVisible={isVisible}
        showCreateMenu={showCreateMenu}
        createEvent={createEvent}
      />
    </>
  );
};

export default App;
