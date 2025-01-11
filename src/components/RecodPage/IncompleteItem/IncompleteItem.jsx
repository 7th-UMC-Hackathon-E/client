import * as S from '@/components/RecodPage/IncompleteItem/IncompleteItem.style';

import ElipseGold from '@/assets/icons/elipseGold.svg?react';

const IncompleteItem = ({ text }) => {
  return (
    <S.Container>
      <ElipseGold />
      {text}
    </S.Container>
  );
};
export default IncompleteItem;
