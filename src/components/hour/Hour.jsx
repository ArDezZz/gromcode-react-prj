import React, { useEffect, useState } from 'react';
import Event from '../event/Event';
import RedLine from './RedLine';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';
import './hour.scss';

const Hour = ({ dataHour, hourEvents, day, fetchEventsList }) => {
  const [redlineDatas, setRedlineDatas] = useState({
    redlineMinutes: new Date().getMinutes(),
  });

  useEffect(() => {
    const updateRedLineDatas = setInterval(() => {
      setRedlineDatas({
        redlineMinutes: new Date().getMinutes(),
      });
    }, 1000 * 60);

    return () => {
      clearInterval(updateRedLineDatas);
    };
  }, []);

  const { redlineMinutes } = redlineDatas;
  const isShow =
    new Date().getDate() === day.getDate() &&
    new Date().getHours() === dataHour &&
    new Date().getMonth() === day.getMonth();

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isShow && <RedLine top={redlineMinutes - 1} />}
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
            fetchEventsList={fetchEventsList}
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
  day: PropTypes.object,
};
