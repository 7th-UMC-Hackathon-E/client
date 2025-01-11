import React, { useState, useEffect } from 'react';
import * as S from './StatusBar.style';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import GraphIcon from '@/assets/icons/graph.svg';
import ProfileIcon from '@/assets/icons/profile.svg';

const StatusBar = ({ rank = 'N', participants = 'N' }) => {
  const [remainingTime, setRemainingTime] = useState('');

  const calculateRemainingTime = () => {
    const now = new Date();
    const nextMorning = new Date();

    nextMorning.setHours(6, 0, 0, 0);

    if (now >= nextMorning) {
      nextMorning.setDate(nextMorning.getDate() + 1);
    }

    const diffInSeconds = Math.floor((nextMorning - now) / 1000);

    const hrs = String(Math.floor(diffInSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((diffInSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(diffInSeconds % 60).padStart(2, '0');

    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.Container>
      <S.StatusBox style={{ background: 'rgba(255, 255, 255, 0.20)' }}>
        <S.Icon src={SparkleIcon} alt="Sparkle Icon" />
        {remainingTime}
        <S.Icon src={SparkleIcon} alt="Sparkle Icon" />
      </S.StatusBox>

      <S.StatusBox>
        <S.Icon src={GraphIcon} alt="Graph Icon" />
        현재 {rank}등
      </S.StatusBox>

      <S.StatusBox>
        <S.Icon src={ProfileIcon} alt="Profile Icon" />
        {participants}명
      </S.StatusBox>
    </S.Container>
  );
};

export default StatusBar;
