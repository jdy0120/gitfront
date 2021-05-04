import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { EventInfo } from '../../types/types';
import { useAppContext } from '../../_providers/AppProviders';

const DdayFormat = (Dday:number):string => {
  const oneDay:number = (24)*(60)*(60)*(1000);
  if (Math.floor(Dday/oneDay) === 0) {
    const hour = Math.floor(Dday/3600000);
    const min = Math.floor((Dday % 3600000) / 60000);
    const sec = Math.floor((Dday % 60000)/1000);
    return ' : ' + hour + '시간' + min + '분' + sec + '초' 
  }
  return '[D-day] : ' + (Math.floor(Dday/oneDay)).toString();
}

const getTime = (date:string,time:string): any => {
  const today = new Date();
  
  const nearEventTime = {
    year: parseInt(date.substring(0,4)),
    month: parseInt(date.substring(5,7)),
    day: parseInt(date.substring(8,10)),
    hours: parseInt(time.substring(0,2)),
    minutes: parseInt(time.substring(3,5)),
    seconds: parseInt(time.substring(6,8)),
  };
  
  const nearTime = new Date(
    nearEventTime.year,
    nearEventTime.month-1,
    nearEventTime.day,
    nearEventTime.hours,
    nearEventTime.minutes,
    nearEventTime.seconds,
  );

  const leftMiliseconds = nearTime.getTime()-today.getTime();
  if (leftMiliseconds > 0) return leftMiliseconds
  return 0;
}
interface Props {
  events: EventInfo[]|undefined
}

const PrintDday = (props:Props) => {
  const [Dday, setDday] = useState<number|undefined>();

  const { state: { user } } = useAppContext();

  const getDday = (events: EventInfo[]|undefined): void => {
    if (events === undefined) {
      setDday(undefined);
      return
    }
    if (user?.choiceEvent === undefined) {
      setDday(undefined);
      return
    }

    const el = events.filter((event:EventInfo) => {
      return event.idx === user.choiceEvent;
    })

    if (el[0] === undefined) {
      setDday(undefined);
      return
    }

    const leftDay = getTime(el[0].date,el[0].time)
    
    if (leftDay < 0){
      setDday(undefined);
      return
    }
    setDday(leftDay)
    return
  }

  useEffect(() => {
    const setTime = setInterval(() => {
      getDday(props.events)
    },1000)
    return () => clearInterval(setTime)
  },[props.events,user?.choiceEvent])

  return (
  <>
    {Dday !== undefined && Dday > 0 ?
      <p>{'선택한 일정 '}{DdayFormat(Dday)}</p>
      :
      <p>{'선택한 일정이 없습니다.'}</p>
    }
  </>
  );
};

export default PrintDday;