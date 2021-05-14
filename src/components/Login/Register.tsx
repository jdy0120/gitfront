import React, { useState } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
// import { useCookies } from "react-cookie";
import jwt from "jsonwebtoken";
import { jwtObj } from "../../_config/jwt-config";
import { useAppContext } from "../../_providers/AppProviders";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

interface Props {
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      alignItems: "center",
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const Register = ({ setOpenLoginModal }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  // const [cookie, setCookie] = useCookies();
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const { setUser } = useAppContext();

  const requestOption = {
    headers: {
      "Context-Type": "application/json",
    },
    body: {
      name: name,
      email: email,
      pw: pw,
    },
  };
  const getRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/register",
        `http://localhost:5000/vaulted-bazaar-304910/us-central1/authFunction/auth/register`,
        requestOption
      );
      const response = await axios.post(
        // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login",
        `http://localhost:5000/vaulted-bazaar-304910/us-central1/authFunction/auth/login`,
        requestOption,
        { withCredentials: true }
      );
      setOpenLoginModal(false);
      setUser({
        loginToken: response.data.loginToken,
        ...JSON.parse(
          JSON.stringify(jwt.verify(response.data.loginToken, jwtObj.secret))
        ),
      });
    } catch (err) {
      const response = err.response;
      switch (response.data) {
        case "Duplicated email":
          alert("중복된 이메일 입니다.");
          break;
        default:
          alert(response.data);
          break;
      }
    }
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <Title>{"회원가입"}</Title>
      <form action="/" onSubmit={getRegister}>
        name :{" "}
        <input
          type="text"
          placeholder="이름"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          required
        />
        <br />
        email :{" "}
        <input
          type="email"
          placeholder="이메일"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        password :{" "}
        <input
          type="text"
          placeholder="비밀번호"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPw(e.target.value);
          }}
          required
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Register;
