import { useEffect } from 'react';
import { Friend } from '../../types/types';
import axios from 'axios';

interface Props {
  friend: Friend
  canChange: boolean
  setCanChange: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeOrAddFriend = ({ friend, canChange, setCanChange }:Props) => {

  const changeTrue = () => {
    setCanChange(true)
  }

  const insertFriendDatabase = async () => {

    const friendInfo:Friend = {
      name: (document.getElementById('name') as HTMLInputElement).value.toString(),
      age: parseInt((document.getElementById('age') as HTMLInputElement).value.toString()),
      nickname: (document.getElementById('nickname') as HTMLInputElement).value.toString()
    }

    const requestOption = {
      headers:{
        'Context-Type': 'application/json'
      },
      body: {
        friendInfo
      }
    };
    
    const response = await axios.put('https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/insertFriend',requestOption);
    return response;
  }

  const changeFalse = async () => {
    await insertFriendDatabase()
    setCanChange(false)
  }
  
  useEffect(() => {
  },[]);

  return (
    <div>
      {canChange === false ?
      <button onClick={changeTrue}>별명을 바꾸거나 추가하고 싶어요.</button>
      :
      <>
        <p>이름 : </p><input type="text" id='name' defaultValue={friend.name} />
        <p>나이 : </p><input type="number" id='age' />
        <p>별명 : </p><input type="text" id='nickname' defaultValue={friend.nickname} />
        <button onClick={changeFalse}>확인!</button>
      </>
      }
    </div>
  );
}

export default ChangeOrAddFriend;