import React, { useState,useEffect } from 'react';

interface HolidayList {
  dateKind: string;
  dateName: string;
  isHoliday: string;
  locdate: number;
  seq: number;
}

const GetHoliday = () => {
  const [holidayList, setHolidayList] = useState<HolidayList[]>([
    {
      dateKind: '',
      dateName: '',
      isHoliday: '',
      locdate: 0,
      seq: 0,
    }
  ]);

  const runFetch = (e:React.MouseEvent<HTMLButtonElement>) => {

    const inputYear = (document.getElementById('year') as HTMLInputElement ).value;

    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({year:inputYear})
    }

    const fetchHoliday = async ():Promise<void> => {
      const response = await fetch(`http://localhost:5050/fetchHoliday`, requestOption);
      const data = await response.json()
      if (!data.holidayList.item) {
        setHolidayList([{
          dateKind:'올바른 연도를 입력해주세요',
          dateName: '올바른 연도를 입력해주세요',
          isHoliday: '',
          locdate: 0,
          seq: 0,
        }]);
      } else {
        setHolidayList(data.holidayList.item);
      }
    }

    fetchHoliday()

  }
  const itemList = holidayList.map((holiday,index) => 
    <li key={index}>
      {holiday.dateName}({holiday.locdate})
    </li>
  );
  useEffect(() => {console.log('렌더링!')},[]);

  return (
    <div>
      <input id='year' type="number"/>
      <button onClick={runFetch}>확인</button>
      <ul>
        {itemList}
      </ul>
    </div>
  );
}
export default GetHoliday;