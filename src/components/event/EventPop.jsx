import React from 'react';

import './event.scss';

const EventPop = ({ id, deleteEvent }) => {
  const deleteEventHandler = () => {
    deleteEvent(id);
  };
  return (
    <>
      <button className="delete-event-btn" onClick={deleteEventHandler}>
        <i className="fas fa-trash delete-event-btn__icon" style={{ paddingRight: '5px' }}></i>
        Delete
      </button>
    </>
  );
};

export default EventPop;
