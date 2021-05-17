import { Dispatch, SetStateAction, useState } from "react";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EventInfo } from "../../types/types";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { TextField } from "@material-ui/core";
import axios from "axios";
// import { useCookies } from "react-cookie";
import { useAppContext } from "../../_providers/AppProviders";

interface Props {
  clickedEvent: EventInfo | undefined;
  clickedDate: string | undefined;
  setEventModal: Dispatch<SetStateAction<boolean>>;
  CURDFlag: boolean;
  setCURDFlag: Dispatch<SetStateAction<boolean>>;
}

const requestOption = {
  headers: {
    "Context-Type": "application/json",
  },
};

const formatMoment = (datestring: string): any => {
  const weeks = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const newDate = datestring.replace(
    /([0-9]{4})([0-9]{2})([0-9]{2})/,
    "$1-$2-$3"
  );
  const date = new Date(newDate);
  return newDate + " [" + weeks[date.getDay()] + "]";
};

export const EventCRUD = ({
  clickedEvent,
  clickedDate,
  setEventModal,
  CURDFlag,
  setCURDFlag,
}: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time,setTime] = useState('07:30');
  // const [cookie] = useCookies();

  const {
    state: { user }, setUser
  } = useAppContext();

  const insertEvent = async () => {
    const insertEventRequsetOption = {
      ...requestOption,
      body: {
        division: "insertEvent",
        title: title,
        content: content,
        email: user?.email,
        date: clickedDate + ' ' + time + ':00',
      }
    }

    try {
      const response = await axios.post(
        // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar",
        `http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas/Calendar`,
        insertEventRequsetOption
      );
      console.log(JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }

    setTitle('');
    setContent('');
    setTime('07:30');
    setEventModal(false);
    CURDFlag ? setCURDFlag(false) : setCURDFlag(true);
  };

  const deleteEvent = async () => {
    if (user?.email === clickedEvent?.email) {
      const deleteEventRequestOption = {
        headers: {
          ...requestOption.headers,
          loginToken: user?.loginToken,
        },
        body: {
          division: "deleteEvent",
          idx: clickedEvent?.idx,
        },
      }
      try {
        const response = await axios.post(
          // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar",
          `http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas/Calendar`,
          deleteEventRequestOption
        );
        console.log(JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
      setEventModal(false);
      if (user?.choiceEvent === clickedEvent?.idx) {
        setUser({
          ...user,
          choiceEvent: -1
        })
      }
      CURDFlag ? setCURDFlag(false) : setCURDFlag(true);
    } else {
      setEventModal(false);
      alert("남의 것을 삭제할 수 없습니다.");
    }
  };

  const choiceEvent = async () => {
    const choiceEventRequestOption = {
      headers: {
        ...requestOption.headers,
        loginToken: user?.loginToken,
      },
      body: {
        division: "choiceEvent",
        idx: clickedEvent?.idx,
        email: user?.email
      },
    }

    try {
      const response = await axios.post(
        // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar",
        `http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas/Calendar`,
        choiceEventRequestOption
      );
      console.log(JSON.stringify(response));
      setUser({
        ...user,
        choiceEvent: clickedEvent?.idx,
      })
    } catch (err) {
      console.log(err);
    }
    setEventModal(false);
  }

  return (
    <DialogContent style={{ textAlign: "center" }}>
      {clickedEvent ? (
        <>
          <ScheduleIcon />
          <DialogTitle id="alert-dialog-slide-description">
            {clickedEvent.title}
          </DialogTitle>
          <DialogContentText id="alert-dialog-slide-description">
            {clickedEvent.date ? formatMoment(clickedEvent?.date) : "null"}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {clickedEvent.time}
          </DialogContentText>
          <hr />
          <DialogContentText id="alert-dialog-slide-description">
            {clickedEvent.content}
          </DialogContentText>
          <hr />
          <DialogContentText id="alert-dialog-slide-description">
            {clickedEvent.name}
          </DialogContentText>
          <hr />
          <Button variant="contained" color="primary" onClick={choiceEvent}>
            {"D-day"}
          </Button>
          <Button variant="contained" color="primary" onClick={deleteEvent}>
            {"삭제"}
          </Button>
        </>
      ) : (
        <>
          <DialogTitle id="alert-dialog-slide-description">
            <TextField
              label="제목"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </DialogTitle>
          <DialogContentText id="alert-dialog-slide-description">
            {clickedDate}
          </DialogContentText>
          <TextField
            id="time"
            label="시간"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />
          <hr/>
          <TextField
            multiline
            label="내용"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <DialogContentText id="alert-dialog-slide-description">
            {user?.name}
          </DialogContentText>
          <Button variant="contained" color="primary" onClick={insertEvent}>
            {"저장"}
          </Button>
        </>
      )}
    </DialogContent>
  );
};
