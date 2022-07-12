import React from 'react';
import PropTypes from 'prop-types';

const RedLine = ({ isShow, top }) =>
  isShow ? (
    <div className="red-line" style={{ top: `${top}px` }}>
      <span></span>
    </div>
  ) : null;

export default RedLine;

RedLine.propTypes = {
  isShow: PropTypes.bool,
  top: PropTypes.number,
};
