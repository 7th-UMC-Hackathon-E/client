import * as S from '@/pages/MyPage/MyPage.style';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/Button';
import CheckIcon from '@/assets/icons/check.svg?react';
import ElipseIcon from '@/assets/icons/elipse.svg?react';
import EnterIcon from '@/assets/icons/enter.svg?react';
import LockIcon from '@/assets/icons/lock.svg?react';
import CancelIcon from '@/assets/icons/cancel.svg?react';
const MyPage = () => {
  const navigate = useNavigate();

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
        <S.Timer>00:00:00</S.Timer>
        <S.UnionImage src="/images/mypage_union.png" alt="Union Image" />
      </S.TimerContainer>
      <S.mainUnionImage src="/images/mypage_mainUnion.png" alt="Main Union Image" />
      <S.nameDiv>
        <S.name>이름</S.name>
      </S.nameDiv>
      <S.ButtonsContainer>
        <S.Button onClick={goToTodos}>ToDo 작성</S.Button>
        <S.Button onClick={goToRecords}>이전 기록 보기</S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default MyPage;
