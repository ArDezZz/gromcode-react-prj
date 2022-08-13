import React from 'react';
import PropTypes from 'prop-types';

const RedLine = ({ top }) => (
  <div className="red-line" style={{ top: `${top}px` }}>
    <span></span>
  </div>
);

export default RedLine;

RedLine.propTypes = {
  isShow: PropTypes.bool,
  top: PropTypes.number,
};
