import React, { useState } from 'react';
import axios from 'axios';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

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

const Register = ({ setOpenLoginModal }:Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const requestOption = {
    headers: {
      'Context-Type': 'application/json'
    },
    body: {
      name: name,
      email: email,
      pw: pw
    }
  }
  const getRegister = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/register',requestOption);
      await axios.post('https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/authFunction/auth/login',requestOption,{ withCredentials: true });
      setOpenLoginModal(false);
      window.location.reload();
    } catch(err) {
      const response = err.response;
      switch (response.data) {
        case 'Duplicated email':
          alert('중복된 이메일 입니다.');
          break;
        default:
          alert(response);
          break;
      }
    }
  }

  return (
    <div style={modalStyle} className={classes.paper}>
      <form action="/" onSubmit={getRegister}>
        name : <input type="text" placeholder='이름' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}} required/><br/>
        email : <input type="email" placeholder='이메일' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}} required/><br/>
        password : <input type="text" placeholder='비밀번호' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPw(e.target.value)}} required/><br/>
        <button type='submit'>회원가입</button>
      </form>
    </div>
  );
}

export default Register;