import * as S from '@/components/TodoPage/TodoItem/TodoItem.style';
import ElipseIcon from '@/assets/icons/elipse.svg?react';
import CancelIcon from '@/assets/icons/cancel.svg?react';

const TodoItem = ({ text, onDelete }) => {
  return (
    <S.Container>
      <ElipseIcon />
      <S.Text>{text}</S.Text>
      <S.CancelButton onClick={onDelete}>
        <CancelIcon />
      </S.CancelButton>
    </S.Container>
  );
};

export default TodoItem;
