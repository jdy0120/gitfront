import { Dispatch, SetStateAction, useState } from "react";

import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EventInfo, JwtInfo } from "../../types/types";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { TextField } from "@material-ui/core";
import axios from "axios";
import jwt from "jsonwebtoken";
import moment from "moment-timezone";
import { useCookies } from "react-cookie";
import { jwtObj } from "../../_config/jwt-config";

moment().tz("Asia/Seoul").format();

interface Props {
  clickedEvent: EventInfo | undefined;
  clickedDate: string | undefined;
  setEventModal: Dispatch<SetStateAction<boolean>>;
}

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
  return newDate + ", " + weeks[date.getDay()];
};

export const EventCRUD = ({
  clickedEvent,
  clickedDate,
  setEventModal,
}: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cookie] = useCookies();

  const insertEvent = async () => {
    const requestOption = {
      headers: {
        "Context-Type": "application/json",
        loginToken: cookie.loginToken,
      },
      body: {
        division: "insertEvent",
        title: title,
        content: content,
        name: cookie["name"],
        date: clickedDate,
      },
    };
    console.log(requestOption);
    try {
      const response = await axios.post(
        "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar",
        requestOption
      );
      console.log(JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
    setEventModal(false);
    window.location.reload();
  };

  const deleteEvent = async () => {
    const jwtInfo: string | object = jwt.verify(
      cookie["loginToken"],
      jwtObj.secret
    );
    const { ...tokenInfo } = JSON.parse(JSON.stringify(jwtInfo));

    if (tokenInfo.email === clickedEvent?.email) {
      const requestOption = {
        headers: {
          "Context-Type": "application/json",
          loginToken: cookie.loginToken,
        },
        body: {
          division: "deleteEvent",
          idx: clickedEvent?.idx,
        },
      };
      console.log(requestOption);
      try {
        const response = await axios.post(
          "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Calendar",
          requestOption
        );
        console.log(JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
      setEventModal(false);
      window.location.reload();
    } else {
      setEventModal(false);
      alert("남의 것을 삭제할 수 없습니다.");
    }
  };

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
          <hr />
          <DialogContentText id="alert-dialog-slide-description">
            {clickedEvent.content}
          </DialogContentText>
          <hr />
          <DialogContentText id="alert-dialog-slide-description">
            {clickedEvent.name}
          </DialogContentText>
          <hr />
          <Button variant="contained" color="primary">
            {"수정"}
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
            multiline
            label="내용"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <DialogContentText id="alert-dialog-slide-description">
            {cookie["name"]}
          </DialogContentText>
          <Button variant="contained" color="primary" onClick={insertEvent}>
            {"저장"}
          </Button>
        </>
      )}
    </DialogContent>
  );
};
