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
  const datestring = datenumber.toString();
  return datestring.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/,'$1-$2-$3');
}

const GetHoliday = () => {
  const [year, setYear] = useState('2021');
  const [holidayList, setHolidayList] = useState<HolidayList[]>([
    {
      dateKind: '',
      dateName: '',
      isHoliday: '',
      locdate: 0,
      seq: 0,
    }
  ]);

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
    if (!data) {
      setHolidayList([{
        dateKind:'올바른 연도를 입력해주세요',
        dateName: '올바른 연도를 입력해주세요',
        isHoliday: '',
        locdate: 0,
        seq: 0,
      }]);
    } else {
      setHolidayList(data);
    }
  }

  const runFetch = async() => {
    const inputtedYear = (document.getElementById('year') as HTMLInputElement );
    if (inputtedYear != null ) {
      setYear(inputtedYear.value);
      await fetchHoliday()
    }

  }
  const itemList = holidayList.map((holiday,index) => 
    <li key={index}>
      {holiday.dateName}({formatMoment(holiday.locdate)})
    </li>
  );

  useEffect(() => {
    runFetch();
  },[]);

  return (
    <div>
      <input id='year' type="number" defaultValue='2021'/>
      <button onClick={runFetch}>확인</button>
      <ul>
        {itemList}
      </ul>
    </div>
  );
}
export default memo(GetHoliday);