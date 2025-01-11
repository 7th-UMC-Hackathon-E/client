import { useState } from 'react';
import * as S from '@/pages/TodoPage/TodoPage.style';
import { Button } from '@/components/common/Button/Button';
import EnterIcon from '@/assets/icons/enter.svg?react';
import Typography from './../../components/Typography';
import TodoItem from './../../components/TodoPage/TodoItem/TodoItem';
import { postTodo, getTodoslist, deleteTodo } from '@/apis';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import unix_timeStamp_data from '@/components/common/Date';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient(); // React Query 클라이언트 사용

  // Todo 리스트 가져오기
  const {
    data: todoData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todoList'], // 캐시 키
    // queryFn: () => getTodoslist(1, unix_timeStamp_data()), // API 호출 함수
    queryFn: () => getTodoslist(1, '2025-01-11'), // API 호출 함수
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const todos = Array.isArray(todoData?.result) ? todoData?.result?.[0]?.todos : [];
  console.log('todos:', todos);

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      memberId: 1, // 사용자 ID
      description: inputValue, // 입력값
    };

    try {
      const result = postTodo(newTodo);
      console.log('할 일 생성 성공:', result);
      window.location.reload();
    } catch (error) {
      console.error('할 일 생성 실패:', error);
    }
    setInputValue(''); // 입력값 초기화
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id); // 삭제 요청
      console.log(`할 일 삭제 성공: ${id}`);
      queryClient.invalidateQueries(['todoList']); // 리스트 갱신
    } catch (error) {
      console.error(`할 일 삭제 실패: ${id}`, error);
    }
  };

  if (isLoading) return <S.Container>로딩 중...</S.Container>;
  if (error) return <S.Container>에러 발생: {error.message}</S.Container>;

  return (
    <S.Container>
      <S.Header>
        <Typography varient="h2">TO DO</Typography>
        <Button text="작성 완료" />
      </S.Header>

      <S.TodoList>
        {todos?.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem key={index} text={todo.description} onDelete={() => handleDeleteTodo(todo.id)} />
          ))
        ) : (
          <div>할 일이 없습니다.</div>
        )}
      </S.TodoList>

      <S.InputContainer>
        <S.Input placeholder="달성하고 싶은 목표는 무엇인가요?" value={inputValue} onChange={handleChange} />
        <S.EnterButton onClick={handleAddTodo}>
          <EnterIcon />
        </S.EnterButton>
      </S.InputContainer>
    </S.Container>
  );
};

export default TodoPage;
