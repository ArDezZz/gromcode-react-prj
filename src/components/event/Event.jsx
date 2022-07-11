import React, { useState } from 'react';
import EventPop from './EventPop';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {
  const [hideStatus, setHideStatus] = useState(true);
  const eventStyle = {
    height,
    marginTop,
  };
  console.log(`eventid - ${id}`);

  const deleteEventMenu = () => {
    setHideStatus(!hideStatus);
  };

  return (
    <div style={eventStyle} className="event" onClick={deleteEventMenu}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {!hideStatus ? <EventPop id={id} deleteEvent={deleteEvent} /> : null}
    </div>
  );
};

export default Event;
//algo deleteEvent
//1.click on target event
//2.read a title event
//3.find which event have title event in  array of events
//4.delete from array

// algo CreateEvent
//1 создаем функцию createEvent в App
//2 прокидываем функцию в modal
//3 считываем данные с modal
//4 пушим созданный объект в events
