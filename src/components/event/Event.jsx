import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventPop from './EventPop';
import './event.scss';

const Event = ({ height, marginTop, title, time, id }) => {
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
        <EventPop id={id} />
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

Event.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
  deleteEvent: PropTypes.func,
};
