import * as S from '@/components/common/Button/Button.style';
import CheckIcon from '@/assets/icons/check.svg?react';

export const Button = ({ test }) => {
  return (
    <S.Button>
      <S.ButtonText>
        <CheckIcon />
        {test}
      </S.ButtonText>
    </S.Button>
  );
};
