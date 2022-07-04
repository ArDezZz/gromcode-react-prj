import React from 'react';

import './event.scss';

const EventPop = () => {
  return (
    <>
      <button className="delete-event-btn">
        <i className="fas fa-trash delete-event-btn__icon" style={{ paddingRight: '5px' }}></i>
        Delete
      </button>
    </>
  );
};

export default EventPop;
