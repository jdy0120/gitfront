import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost/3030');
const Chatting = () => {
  const [message,setmessage] = useState('');
  socket.on('', (data) => {
    console.log(data.comment);
  });

  const sendMsg = () => {
    socket.emit('msg', {
      message
    });
  }

  const getMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setmessage(e.target.value);
  }

  return (
    <>
      <div>

      </div>
      <div>
        <input type="text" onChange={getMessage}/>
        <input type="button" onClick={sendMsg}/>
      </div>
    </>
  );
}

export default Chatting;