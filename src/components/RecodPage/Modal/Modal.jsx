import { useEffect } from 'react';
import * as S from '@/components/RecodPage/Modal/Modal.style';
import CancelBlack from '@/assets/icons/cancelBlack.svg?react';

import CompleteItem from './../CompleteItem/CompleteItem';
import IncompleteItem from './../IncompleteItem/IncompleteItem';
const Modal = ({ record, onClose }) => {
  if (!record) return null;

  return (
    <S.Overlay>
      <S.Container>
        <S.Header>
          <S.Title>{record.date} 달성 레포트</S.Title>
          <S.CloseButton onClick={onClose}>
            <CancelBlack />
          </S.CloseButton>
        </S.Header>

        <S.Percentage>{record.percentage}% 달성</S.Percentage>

        <S.Text>완료한 todo : 2개</S.Text>
        <S.CompleteList>
          <CompleteItem text="영어 단어 외우기 1-4 단원" />
          <CompleteItem text="영어 단어 외우기 5-6 단원" />
        </S.CompleteList>
        <S.Text>완료하지 못한 todo : 2개</S.Text>
        <S.CompleteList>
          <IncompleteItem text="영어 단어 외우기 7-8 단원" />
          <IncompleteItem text="영어 단어 외우기 9-10 단원" />
        </S.CompleteList>

        <S.Br> </S.Br>
        <S.SubTitle>그날의 기록</S.SubTitle>
        <S.Description>
          <p>나름 뿌듯하다.</p>
        </S.Description>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
