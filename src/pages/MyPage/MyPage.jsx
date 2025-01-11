import * as S from '@/pages/MyPage/MyPage.style';

import { Button } from '@/components/common/Button/Button';
import CheckIcon from '@/assets/icons/check.svg?react';
import ElipseIcon from '@/assets/icons/elipse.svg?react';
import EnterIcon from '@/assets/icons/enter.svg?react';
import LockIcon from '@/assets/icons/lock.svg?react';
import CancelIcon from '@/assets/icons/cancel.svg?react';
const MyPage = () => {
  return (
    <S.Container>
      <div>
        <p>TO DO</p>
        <Button test="작성 완료" />
      </div>
      <div>
        Todolist
        <div>
          <ElipseIcon />
          Title
          <CancelIcon />
        </div>
      </div>
      <div>
        <input />
        <button>
          <EnterIcon />
        </button>
      </div>
    </S.Container>
  );
};

export default MyPage;
