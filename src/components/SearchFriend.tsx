import React,{ useState } from 'react';

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

const SearchFriend = () => {
  const [inputText, setInputText] = useState('');

  const [profile, setProfile] = useState({
    nickname: '',
    age: ''
  });
  const inputName = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
  const noName = {
    nickname: '찾을 수 없습니다.',
    age: '찾을 수 없습니다.'
  }
  const searchName = () => {
    const friend = friends[inputText];
    if (!friend) {
      setProfile(noName);
    } else {
      setProfile(friend);
    }
  }
  return (
    <div>
      <input value={inputText} onChange={inputName} name="name"/>
      <button onClick={searchName}>출력</button>
      <div>
        <p>카카오톡 7명 그룹채팅방 친구 이름을 입력해보세요.</p>
        <p>이름 : {inputText}</p>
        <p>별명 : {profile.nickname}</p>
        <p>나이 : {profile.age}</p>
      </div>
    </div>
  );
}

export default SearchFriend;