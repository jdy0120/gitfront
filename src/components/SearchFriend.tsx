import React,{ useState,memo,useEffect } from 'react';
import InputFriend from './InputFriend';
import { Friend } from '../types/types';

const SearchFriend = () => {
  
  const [friendList,setFriendList] = useState<Friend[]>([]);
  
  const getFriendList = async() : Promise<any> => {
    const response = await fetch(`https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Friends`);
    const myFriendList = await response.json()
    
    setFriendList(myFriendList);
  }

  useEffect(() => {
    getFriendList();
  },[])
  
  return (
    // inputFriend컴포넌트를 나눈 이유는 렌더링 될때마다 getFriendList를 호출하는것이 성능상 불리하기 때문이고 그럴 필요도 없다.
    <InputFriend friendList={friendList} />
  );
}

export default memo(SearchFriend);