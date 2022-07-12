import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isVisible, changeEventVisible] = useState(false);

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

  const showModalMenu = () => {
    changeEventVisible(!isVisible);
  };

  return (
    <>
      <Header
        weekDates={weekDates}
        nextWeek={nextWeekChange}
        prevWeek={prevWeekChange}
        todayWeek={todayWeek}
        showModalMenu={showModalMenu}
      />
      <Calendar weekDates={weekDates} isVisible={isVisible} showModalMenu={showModalMenu} />
    </>
  );
};

export default App;
