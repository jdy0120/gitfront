import React, { useState, useEffect } from "react";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import { useCookies } from "react-cookie";
import { RouteComponentProps } from "react-router";
import { Day, EventInfo } from "../../types/types";
import moment from "moment-timezone";

moment().tz("Asia/Seoul").format();

const Calendar = ({ history }: RouteComponentProps) => {
  const [check, setCheck] = useState(false);
  const [cookie] = useCookies();
  const [events, setEvents] = useState<EventInfo[]>();
  const [eventModal, setEventModal] = useState<Boolean>(false);
  const [clickedEvent, setClickedEvent] = useState<EventInfo>();
  const [dayInfo, setDayInfo] = useState<Day>({
    year: 2021,
    month: 4,
  });
  console.log(moment("2021-4").format("YYYY-MM"));

  const requestOption = {
    headers: {
      "Context-Type": "application/json",
      loginToken: cookie.loginToken,
    },
    body: {
      year: dayInfo.year,
      month: dayInfo.month,
    },
  };
  console.log("Entrance Calendar Page");
  console.log(moment().format());
  console.log(dayInfo.year, dayInfo.month);
  const getEvents = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas/Calendar",
        requestOption
      );
      setCheck(true);
      setEvents(
        response.data.map((element: any) => {
          return {
            ...element,
            date: moment(element.date).format("YYYY-MM-DD"),
          };
        })
      );
    } catch (err) {
      const response = err.response;
      switch (response.data) {
        case "Access Denied":
          alert("접근이 제한되었습니다.");
          history.push("/gitfront");
          break;
        case "Not valid Token":
          alert("올바른 토큰이 아닙니다.");
          history.push("/gitfront");
          break;
        default:
          alert(response.data);
          break;
      }
    }
  };

  const showEventDetail = (element: EventClickArg) => {
    setEventModal(true);
    console.log(element.event);
    // setClickedEvent({
    //   title: string;
    //   content: element.event._def.extendedProps.contents,
    //   email: string;
    //   date: string;
    // });
  };

  console.log(events);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={(args) => alert(args.dateStr)}
      events={events}
      eventClick={showEventDetail}
    />
  );
};

export default Calendar;
