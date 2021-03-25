import { useState } from 'react';

type time = {
  hour: number,
  minute: number,
  seconds: number
}

const NowTime = () => {
  const [nowTime,setNowTime] = useState<time>({
    hour: 0,
    minute: 0,
    seconds: 0
  });

  const setTime = () => {
    const date = new Date();
    setNowTime({
      hour: date.getHours(),
      minute: date.getMinutes(),
      seconds: date.getSeconds()
    });
  }
  setInterval(setTime,1000);

  return (
    <div>
      <p>현재 시간은</p>
      <p>{nowTime.hour}시 {nowTime.minute}분 {nowTime.seconds}초 입니다.</p>
      <p>하지만 도연이의 퇴근 시간은 22시 0분 0초 입니다.</p>
    </div>
  );
}
export default NowTime;