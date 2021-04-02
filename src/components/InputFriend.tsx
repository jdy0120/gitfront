import { useState } from 'react';
import { Friend } from '../types/types';

interface Props {
  friendList:Friend[]
}

const InputFriend = ({ friendList }:Props) => {
  const [filteredFriend,setFilteredFriend] = useState<Friend>({
      idx: 0,
      name: '',
      age: 0,
      nickname: ''
    }
  );

  const arraySearch = async () => {
    const name = await (document.getElementById('name') as HTMLInputElement);
    const filterFriend =  friendList.filter((element:Friend) => element.name === name.value);
    if (filterFriend.length !== 0) {
      setFilteredFriend(filterFriend[0]);
    } else {
      setFilteredFriend({
        idx: -1,
        name: '찾을 수 없습니다.',
        age: -1,
        nickname: '찾을 수 없습니다.'
      });
    }
  }
  
  return (
    <div>
      <input type="text" id='name'/>
      <button type="submit" onClick={arraySearch}>찾기!</button>
      {filteredFriend.idx === 0 ? <h1>이름을 입력해주세요.</h1>
      : <div>
          이름 : {filteredFriend.name}
          나이 : {filteredFriend.age}
          별명 : {filteredFriend.nickname}
        </div>
      }
    </div>
  );
}

export default InputFriend;