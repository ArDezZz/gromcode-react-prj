import React from 'react';

const RedLine = ({ isShow, top }) =>
  isShow ? (
    <div className="red-line" style={{ top: `${top}px` }}>
      <span></span>
    </div>
  ) : null;

export default RedLine;
