import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['loginToken']);

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
    await axios.post('http://localhost:5000/vaulted-bazaar-304910/us-central1/authFunction/auth/login',requestOption,{ withCredentials: true });

  }


  return (
    <div>
      <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}/>
      <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPw(e.target.value)}}/>
      <button onClick={getToken}>Sign in</button>
    </div>
  );
}

export default Login;