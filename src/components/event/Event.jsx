import React, { useState } from 'react';
import EventPop from './EventPop';
import './event.scss';

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [hideStatus, setHideStatus] = useState(true);

  const deleteEventMenu = () => {
    setHideStatus(!hideStatus);
  };

  return (
    <div style={eventStyle} className="event" onClick={deleteEventMenu}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {!hideStatus ? <EventPop /> : null}
    </div>
  );
};

export default Event;
//algo deleteEvent
//1.click on target event
//2.read a title event
//3.find id array of events
//4.delete from array
