import React, { useEffect, useState } from 'react';
import Event from '../event/Event';
import RedLine from './RedLine';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';
import './hour.scss';

const Hour = ({ dataHour, hourEvents, day, handleFetchEvents }) => {
  const [redlineDatas, setRedlineDatas] = useState({
    currentHour: new Date().getHours(),
    currentMinutes: new Date().getMinutes(),
  });

  useEffect(() => {
    const updateRedLineDatas = setInterval(() => {
      setRedlineDatas({
        currentHour: new Date().getHours(),
        currentMinutes: new Date().getMinutes(),
      });
    }, 1000 * 60);

    return () => {
      clearInterval(updateRedLineDatas);
    };
  }, []);

  const { currentMinutes, currentHour } = redlineDatas;
  const showRedlineDatas = new Date().getDate() === day && currentHour === dataHour;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <RedLine isShow={showRedlineDatas} top={currentMinutes - 1} />
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes(),
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes(),
        )}`;

        return (
          <Event
            key={id}
            id={id}
            height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            handleFetchEvents={handleFetchEvents}
          />
        );
      })}
    </div>
  );
};

export default Hour;

Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array,
  deleteEvent: PropTypes.func,
  day: PropTypes.number,
};
