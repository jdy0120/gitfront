import { EventInfo } from "../../types/types";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import React, { useEffect, useState, useRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import { RouteComponentProps } from "react-router";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import axios from "axios";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import moment from "moment-timezone";
// import { useCookies } from "react-cookie";
import { useAppContext } from "../../_providers/AppProviders";
import { EventCRUD } from "./EventCRUD";
import PrintDday from './PrintDday';

/**
 * date에 대한 sort time에 대한 sort
 */
// const sortEventsToTime = (a:EventInfo,b:EventInfo) => {
//   if (a.time > b.time) {
//     return 1;
//   }
//   if (a.time < b.time) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// }

// const sortEventsToDate = (a:EventInfo,b:EventInfo) => {
// if (a.date > b.date) {
//   return 1;
// }
// if (a.date < b.date) {
//   return -1;
// }
// // a must be equal to b
// return 0;
// }

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Calendar = ({ history }: RouteComponentProps) => {
  // const [cookie] = useCookies();
  const [events, setEvents] = useState<EventInfo[]>();
  const [eventModal, setEventModal] = useState<boolean>(false);
  const [clickedEvent, setClickedEvent] = useState<EventInfo | undefined>();
  const [clickedDate, setClickedDate] = useState<string>();
  const [CURDFlag, setCURDFlag] = useState<boolean>(false);
  const [Dday, setDday] = useState<number|undefined>();

  const {
    state: { user },
  } = useAppContext();

  const requestOption = {
    headers: {
      "Context-Type": "application/json",
      loginToken: user?.loginToken,
    },
    body: {
      division: "getEvents",
    },
  };

  const getEvents = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas/Calendar",
        requestOption
      );
      setEvents(
        response.data.map((element: any) => {
          return {
            ...element,
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
    const def = element.event._def;
    const instance = element.event._instance;
    setClickedDate(element.event._instance?.range.start.toString());
    setClickedEvent({
      idx: def.extendedProps.idx,
      name: def.extendedProps.name,
      color: def.extendedProps.color,
      title: def.title,
      content: def.extendedProps.content,
      email: def.extendedProps.email,
      date: moment(instance?.range.start).format("YYYY-MM-DD"),
      time: def.extendedProps.time,
    });
  };

  const insertEventForm = (element: DateClickArg) => {
    setClickedEvent(undefined);
    setClickedDate(element.dateStr);
    setEventModal(true);
  };

  const closeEventDetail = () => {
    setEventModal(false);
  };

  // const getDday = () => {
  //   console.log(getTime(events))
  //   // console.log(Dday);
  //   if (!Dday) return 0;
  //   if (Dday > 0) return 'Dday ' + Math.floor(Dday).toString()
  //   return Math.floor(Dday/3600000).toString() + '시' + Math.floor(Dday/60000).toString() + '분' + Math.floor(Dday/1000).toString() + '초'
  // }

  useEffect(() => {
    getEvents();
  }, [CURDFlag]);

  return (
    <>
      <PrintDday events={events} ref={DdayRef}/>
      
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={insertEventForm}
        events={events}
        eventClick={showEventDetail}
      />
      <Dialog
        open={eventModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeEventDetail}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <EventCRUD
          clickedEvent={clickedEvent}
          clickedDate={clickedDate}
          setEventModal={setEventModal}
          CURDFlag={CURDFlag}
          setCURDFlag={setCURDFlag}
        />
      </Dialog>
    </>
  );
};

export default Calendar;
