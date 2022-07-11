import React, { useEffect, useState } from 'react';
import './hour.scss';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import RedLine from './RedLine';

const Hour = ({ dataHour, hourEvents, deleteEvent, day }) => {
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
            deleteEvent={deleteEvent}
            height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default Hour;
