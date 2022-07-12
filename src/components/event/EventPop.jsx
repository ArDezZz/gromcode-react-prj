import React from 'react';
import PropTypes from 'prop-types';
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

EventPop.proptypes = {
  id: PropTypes.string,
  deleteEvent: PropTypes.func,
};
