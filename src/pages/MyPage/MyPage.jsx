import React, { useEffect, useState } from 'react';
import * as S from '@/pages/MyPage/MyPage.style';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(duration);

const MyPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const nextTwoAM = dayjs().hour(2).minute(0).second(0);
      const nextSixAM = dayjs().hour(6).minute(0).second(0);

      // 새벽 2시가 이미 지났으면 다음날 새벽 2시로 설정
      if (now.isAfter(nextSixAM)) {
        nextTwoAM.add(1, 'day'); // 다음날 새벽 2시로 설정
        nextSixAM.add(1, 'day'); // 다음날 새벽 6시로 설정
      }

      if (now.isBetween(nextTwoAM, nextSixAM)) {
        // 새벽 2시 ~ 6시: 00:00:00 고정
        setCountdown('00:00:00');
      } else {
        // 새벽 6시 ~ 익일 새벽 2시까지 카운트다운
        const targetTime = now.isBefore(nextTwoAM) ? nextTwoAM : nextSixAM.add(20, 'hour'); // 타겟 시간 설정
        const diff = targetTime.diff(now);
        const duration = dayjs.duration(diff);

        const hours = String(duration.hours()).padStart(2, '0');
        const minutes = String(duration.minutes()).padStart(2, '0');
        const seconds = String(duration.seconds()).padStart(2, '0');

        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToTodos = () => {
    navigate('/todos');
  };

  const goToRecords = () => {
    navigate('/records');
  };

  return (
    <S.Container>
      <S.TimerContainer>
        <S.UnionImage src="/images/mypage_union.png" alt="Union Image" />
        <S.Timer>{countdown}</S.Timer> {/* 카운트다운 출력 */}
        <S.UnionImage src="/images/mypage_union.png" alt="Union Image" />
      </S.TimerContainer>
      <S.mainUnionImage src="/images/mypage_mainUnion.png" alt="Main Union Image" />
      <S.nameDiv>
        <S.name>이름</S.name>
      </S.nameDiv>
      <S.ButtonsContainer>
        <S.Button onClick={goToTodos}>목표 달성하러 가기</S.Button>
        <S.Button onClick={goToRecords}>이전 기록 보기</S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default MyPage;
