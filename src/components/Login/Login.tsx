import React, { useState } from 'react';
import axios from 'axios';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Register from './Register';
import { useCookies } from 'react-cookie';
interface Props {
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>
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
      alignItems: 'center',
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const Login = ({ setOpenLoginModal }:Props) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [modalStyle] = useState(getModalStyle);
  const [register, setRegister] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies();

  const classes = useStyles();

  const requestOption = {
    header : {
      'Context-Type': 'application/json'
    },
    body : {
      email: email,
      pw : pw
    }
  }

  const getToken = async () => {
    try {
      const response = await axios.post('https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login',requestOption,{ withCredentials: true });
      setOpenLoginModal(false);
      setCookie('loginToken',response.data.loginToken,{ path: '/', maxAge:response.data.maxAge});
      setCookie('name',response.data.name,{ path: '/', maxAge:response.data.maxAge});
      console.log('logged in');
      // window.location.reload();
    } catch (err) {
      const response = err.response;
      switch (response.data) {
        case 'Not valid email': {
          alert('존재하지 않는 이메일 입니다.');
          break;
        }
        case 'Not valid password':
          alert('비밀번호가 틀렸습니다.');
          break;
        default:
          alert(response);
          break;
      }
    }
  }

  return (
    <>
      {register ? 
        <Register setOpenLoginModal={setOpenLoginModal} />
      :
        <div style={modalStyle} className={classes.paper}>
          email : <input type="text" placeholder='이메일' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}/><br/>
          password : <input type="password" placeholder='패스워드' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPw(e.target.value)}}/><br/>
          <button onClick={getToken}>로그인</button>
          <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => {setRegister(true)}}>회원가입</button>
        </div>
      }
    </>
  );
}

export default Login;