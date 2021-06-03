import { memo, useEffect, useState } from "react";

type time = {
  hour: number;
  minute: number;
  seconds: number;
};

const NowTime = () => {
  const [nowTime, setNowTime] = useState<time>({
    hour: 0,
    minute: 0,
    seconds: 0,
  });

  const setTime = () => {
    const date = new Date();
    setNowTime({
      hour: date.getHours(),
      minute: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  };
  

  useEffect(() => {
    const interval = setInterval(setTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{'현재 시간은'}</p>
      <p>
        {nowTime.hour}{'시 '}{nowTime.minute}{'분 '}{nowTime.seconds}{'초 입니다.'}
      </p>
      {nowTime.hour + ":" + nowTime.minute + ":" + nowTime.seconds <
      "19:30:00" ? (
        <p>{'하지만 도연이의 퇴근 시간은 19시 30분 0초 입니다.'}</p>
      ) : (
        <p>{'도연이는 19시 30분에 퇴근했습니다.'}</p>
      )}
    </div>
  );
};
export default memo(NowTime);
