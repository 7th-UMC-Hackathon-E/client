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

        <S.Text>완료한 todo : 3개</S.Text>
        <S.CompleteList>
          <CompleteItem text="sdfsdf" />
          <CompleteItem text="sdfsdf" />
        </S.CompleteList>
        <S.Text>완료하지 못한 todo : 2개</S.Text>
        <S.CompleteList>
          <IncompleteItem text="sdfsdf" />
        </S.CompleteList>

        <S.Br> </S.Br>
        <S.SubTitle>그날의 기록</S.SubTitle>
        <S.Description>
          <p>나름 뿌듯하다.asdfasdfasfasdfsdfasdfasdfasdfasdfsdfasdfasdfasdf</p>
        </S.Description>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
