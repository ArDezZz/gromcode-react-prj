import React from 'react';
import EventPop from './EventPop';
import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <EventPop />
    </div>
  );
};

export default Event;
