import * as S from '@/components/common/Button/Button.style';
import CheckIcon from '@/assets/icons/check.svg?react';


export const Button = ({ text, onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <S.ButtonText>
        <CheckIcon />
        {text}
      </S.ButtonText>
    </S.Button>
  );
};
