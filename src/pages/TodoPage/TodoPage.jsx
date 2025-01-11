import { useState } from 'react';
import * as S from '@/pages/TodoPage/TodoPage.style';
import { Button } from '@/components/common/Button/Button';
import EnterIcon from '@/assets/icons/enter.svg?react';
import Typography from './../../components/Typography';
import TodoItem from './../../components/TodoPage/TodoItem/TodoItem';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 입력
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 아이템 추가 함수
  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  // 아이템 삭제 함수
  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  // 엔터 시 아이템 생성 함수
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo();
    }
  };
  // 엔터 시 아이템 생성 함수
  const handleSubmit = () => {
    console.log('제출');
  };

  return (
    <S.Container>
      <S.Header>
        <Typography varient="h2">TO DO</Typography>
        <Button text="작성 완료" onClick={handleSubmit} />
      </S.Header>

      <S.TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </S.TodoList>

      <S.InputContainer>
        <S.Input
          placeholder="달성하고 싶은 목표는 무엇인가요?"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <S.EnterButton onClick={addTodo}>
          <EnterIcon />
        </S.EnterButton>
      </S.InputContainer>
    </S.Container>
  );
};

export default TodoPage;
