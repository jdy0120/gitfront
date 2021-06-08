import React, { useEffect, useState } from "react";

import { HeartSpinner } from "react-spinners-kit";
import axios from "axios";

interface HolidayList {
  dateKind: string;
  dateName: string;
  isHoliday: string;
  locdate: number;
  seq: number;
}

const formatMoment = (datenumber: number): any => {
  const weeks = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const datestring = datenumber.toString();
  const newDate = datestring.replace(
    /([0-9]{4})([0-9]{2})([0-9]{2})/,
    "$1-$2-$3"
  );
  const date = new Date(newDate);
  console.log();
  return newDate + ", " + weeks[date.getDay()];
};

const GetHoliday = () => {
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("2021");
  const [holidayList, setHolidayList] = useState<HolidayList[]>([]);

  const runFetch = async (): Promise<void> => {
    fetchHoliday();
  };

  const fetchHoliday = async (): Promise<void> => {
    setLoading(true);
    const requestOption = {
      headers: {
        "Context-Type": "application/json",
      },
      body: {
        year: year,
      },
    };

    const response = await axios.post(
      // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas",
      `http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas`,
      requestOption
    );
    const data = await response.data.holidayList.item;
    setHolidayList(await data);
    setLoading(false);
  };

  const changeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  useEffect(() => {
    fetchHoliday();
    return () => {
      <div>
        <p>{'doyeon'}</p>
      </div>
    };
  }, []);

  return (
    <>
      {loading ? (
        <HeartSpinner size={30} color="#bd2f1c" loading={loading} />
      ) : (
        <div>
          <input
            id="year"
            type="number"
            placeholder={"연도를 입력해주세요."}
            onChange={changeYear}
          />
          <button onClick={runFetch}>{'찾기!'}</button>
          {typeof holidayList == "undefined" ? (
            <p>{'휴일을 찾을 수 없습니다.'}</p>
          ) : (
            <ul style={{ listStyle: "none" }}>
              {holidayList.map((holiday, index) => (
                <li key={index}>
                  {holiday.dateName}({formatMoment(holiday.locdate)})
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
export default GetHoliday;
