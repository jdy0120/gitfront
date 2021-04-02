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
    <InputFriend friendList={friendList} />
  );
}

export default memo(SearchFriend);