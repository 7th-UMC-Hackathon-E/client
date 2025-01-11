import * as S from '@/components/RecodPage/CompleteItem/CompleteItem.style';

import CheckIcon from '@/assets/icons/check.svg?react';

const CompleteItem = ({ text }) => {
  return (
    <S.Container>
      <CheckIcon />
      {text}
    </S.Container>
  );
};
export default CompleteItem;
