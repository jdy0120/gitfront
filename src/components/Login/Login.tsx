import React, { useState } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Register from "./Register";
import { useAppContext } from "../../_providers/AppProviders";
import { jwtObj } from "../../_config/jwt-config";
import jwt from "jsonwebtoken";
// import { useCookies } from "react-cookie";
interface Props {
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const requestOption = {
  header: {
    "Context-Type": "application/json",
  },
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

const Login = ({ setOpenLoginModal }: Props) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const [register, setRegister] = useState(false);
  // const [cookie, setCookie] = useCookies();
  const {
    setUser,
  } = useAppContext();

  const classes = useStyles();

  const loginRequestOption = {
    ...requestOption,
    body: {
      email: email,
      pw: pw,
    },
  }

  const getToken = async () => {
    try {
      const response = await axios.post(
        // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login",
        `http://localhost:5000/vaulted-bazaar-304910/us-central1/authFunction/auth/login`,
        loginRequestOption,
        { withCredentials: true }
      );
      setOpenLoginModal(false);
      setUser({
        loginToken: response.data.loginToken,
        ...JSON.parse(
          JSON.stringify(jwt.verify(response.data.loginToken, jwtObj.secret))
        ),
      });
      console.log("logged in");
    } catch (err) {
      const response = err.response;
      console.log(response);
      switch (response.data) {
        case "Not valid email": {
          alert("???????????? ?????? ????????? ?????????.");
          break;
        }
        case "Not valid password":
          alert("??????????????? ???????????????.");
          break;
        default:
          alert(response);
          break;
      }
    }
  };

  return (
    <>
      {register ? (
        <Register setOpenLoginModal={setOpenLoginModal} />
      ) : (
        <div style={modalStyle} className={classes.paper}>
          {`email :`}{" "}
          <input
            type="text"
            placeholder="?????????"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {`password :`}{" "}
          <input
            type="password"
            placeholder="????????????"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPw(e.target.value);
            }}
          />
          <br />
          <button onClick={getToken}>{`?????????`}</button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setRegister(true);
            }}
          >
            {`????????????`}
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
