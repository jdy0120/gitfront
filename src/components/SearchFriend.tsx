import React,{ useState } from 'react';
import { RouteComponentProps } from 'react-router-dom'

interface MatchParmas {
  username:string;
}

const friends: { [key: string]: any } = {
  조도연: {
    nickname: '씹간지 존잘남',
    age: '20'
  },
  전진영: {
    nickname: '시발롬',
    age: '28'
  },
  오정민: {
    nickname: '대전찐따',
    age: '28',
  },
  문재훈: {
    nickname: '도연짱친',
    age: '28',
  },
  성민승: {
    nickname: '강남호빠',
    age: '28',
  },
  김준석: {
    nickname: '홍성외노자',
    age: '28'
  },
  김철진: {
    nickname: '세라핀플레티넘',
    age: '28'
  }
}

const SearchFriend = ({ match }:RouteComponentProps<MatchParmas>) => {
  const { username } = match.params;
  const profile = friends[username];
  if (!profile) return <div>존재하지 않는 유저 입니다.</div>
  
  return (
    <div>
      <div>
        <p>이름 : {username}</p>
        <p>별명 : {profile.nickname}</p>
        <p>나이 : {profile.age}</p>
      </div>
    </div>
  );
}

export default SearchFriend;