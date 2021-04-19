import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { RouteComponentProps } from 'react-router';

const Calendar = ({ history }:RouteComponentProps) => {

  const [cookie] = useCookies();

  const requestOption = {
    headers : {
      'Context-Type': 'application/json',
      'loginToken': cookie.loginToken
    }
  };

  const goCalendar = async () => {
    try {
      const response = await axios.post('https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar',requestOption);
      console.log(response);
    } catch (err) {
      const response = err.response;
      switch (response.data) {
        case 'Access Denied':
          alert('접근이 제한되었습니다.');
          history.push('/gitfront');
          break;
        case 'Not valid Token':
          alert('올바른 토큰이 아닙니다.');
          history.push('/gitfront');
          break;
        default:
          alert(response.data);
          break;
      }
    }
  }

  useEffect(() => {
    goCalendar();
  });

  return (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
    />
  );
}

export default Calendar;