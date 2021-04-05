import React, { useState,useEffect,memo } from 'react';
import axios from 'axios';

interface HolidayList {
  dateKind: string;
  dateName: string;
  isHoliday: string;
  locdate: number;
  seq: number;
}
const formatMoment = (datenumber: number): any => {
  const weeks = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
  const datestring = datenumber.toString();
  const newDate = datestring.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,'$1-$2-$3');
  const date = new Date(newDate);
  console.log()
  return newDate + ', ' + weeks[date.getDay()];
}

const GetHoliday = () => {
  const [year, setYear] = useState('2021');
  const [holidayList, setHolidayList] = useState<HolidayList[]>([]);

  const fetchHoliday = async ():Promise<void> => {
    const requestOption = {
      headers:{
        'Context-Type': 'application/json'
      },
      body: {
        year: year
      }
    };

    const response = await axios.post('https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas',requestOption);
    const data = await response.data.holidayList.item;
    setHolidayList(await data);
  }
  const changeYear = (e:React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  }

  const runFetch = async(evt:React.KeyboardEvent<HTMLInputElement>):Promise<void> => {
    if (evt.key === "Enter") {
        fetchHoliday()
    }
  }

  useEffect(() => {
    fetchHoliday();
  },[])

  return (
    <div>
      <input id='year' type="number" defaultValue='2021' onChange={changeYear} onKeyPress={runFetch}/>
      {(typeof holidayList == 'undefined') ? (
      <p>휴일을 찾을 수 없습니다.</p>)
      : <ul>
        {holidayList.map((holiday,index) => 
          <li key={index}>
            {holiday.dateName}({formatMoment(holiday.locdate)})
          </li>
        )}
      </ul>
      }
    </div>
  );
}
export default GetHoliday;