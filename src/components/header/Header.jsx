import React from 'react';
import moment from 'moment';

import './header.scss';

const Header = ({ nextWeek, prevWeek, todayWeek, weekDates, showCreateMenu }) => {
  const getWeekMonthString = weekDates => {
    const weekStart = weekDates[0];
    const weekEnd = weekDates[weekDates.length - 1];
    const areDatesInSameMonth = weekStart.getMonth() === weekEnd.getMonth();

    return areDatesInSameMonth
      ? moment(weekStart).format('MMM')
      : `${moment(weekStart).format('MMM')} – ${moment(weekEnd).format('MMM')}`;
  };

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={showCreateMenu}>
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
        <span className="navigation__displayed-month">{getWeekMonthString(weekDates)}</span>
      </div>
    </header>
  );
};

export default Header;
