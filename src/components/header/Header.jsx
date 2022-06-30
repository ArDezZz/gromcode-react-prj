import React from 'react';
import moment from 'moment';

import './header.scss';

const Header = ({ nextWeek, prevWeek, todayWeek, weekStartDate }) => {
  const currentMonth = new Date().getMonth();
  const nextMonth = new Date(weekStartDate).setDate(weekStartDate.getDate() + 1);
  const transitionOfWeeks =
    currentMonth !== new Date(nextMonth).getMonth()
      ? `${moment(weekStartDate).format('MMM')} - ${moment(nextMonth).format('MMM')}`
      : moment(weekStartDate).format('MMM');

  //algo:
  //1.узнать текущий месяц
  //2. узнать месяц следующего дня
  //3. сравнить их, если месяц не изменится - отобразить текущий месяц
  //4. если месяц следующего дня другой - отобразить промежуток

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{transitionOfWeeks}</span>
      </div>
    </header>
  );
};

export default Header;
