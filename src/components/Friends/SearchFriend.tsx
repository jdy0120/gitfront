import React,{ memo, useEffect, useState } from 'react';

import ChangeOrAddFriend from './ChangeOrAddFriend';
import { Friend } from '../../types/types';

const SearchFriend = () => {
  
  const [friendList,setFriendList] = useState<Friend[]>([]);
  const [canChange,setCanChange] = useState(false);
  const [filteredFriend,setFilteredFriend] = useState<Friend>({
      idx: 0,
      name: '',
      age: 0,
      nickname: ''
    }
  );
  
  const getFriendList = async() : Promise<any> => {
    const response = await fetch(`https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Friends`);
    const myFriendList = await response.json()
    
    setFriendList(myFriendList);
  }

  const arraySearch = async () => {
    const name = document.getElementById('name') as HTMLInputElement;
    const filterFriend =  friendList.filter((element:Friend) => element.name === name.value);
    if (filterFriend.length !== 0) {
      setFilteredFriend(filterFriend[0]);
    } else {
      setFilteredFriend({
        idx: -1,
        name: name.value,
        age: -1,
        nickname: '찾을 수 없습니다.'
      });
    }
  }

  useEffect(() => {
    getFriendList();
    return () => {}
  },[canChange])
  
  return (
    <>
      <div>
        <input type="text" id='name' placeholder='이름을 입력해주세요.'/>
        <button type="submit" onClick={arraySearch}>찾기!</button>
        {filteredFriend.idx === 0 ? <h1>이름을 입력해주세요.</h1>
        : <div>
            <p>이름 : {filteredFriend.name}</p>
            <p>나이 : {filteredFriend.age}</p>
            <p>별명 : {filteredFriend.nickname}</p>
            <ChangeOrAddFriend friend={filteredFriend} canChange={canChange} setCanChange={setCanChange} />
          </div>
        }
      </div>
    </>
  );
}

export default memo(SearchFriend);