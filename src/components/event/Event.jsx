import React, { useState } from 'react';
import EventPop from './EventPop';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {
  const [hideStatus, setHideStatus] = useState(true);
  const eventStyle = {
    height,
    marginTop,
  };

  const deleteEventMenu = () => {
    setHideStatus(!hideStatus);
  };

  return (
    <div style={eventStyle} className="event" onClick={deleteEventMenu}>
      {!hideStatus ? (
        <EventPop id={id} deleteEvent={deleteEvent} />
      ) : (
        <>
          <div className="event__title">{title}</div>
          <div className="event__time">{time}</div>
        </>
      )}
    </div>
  );
};

export default Event;
