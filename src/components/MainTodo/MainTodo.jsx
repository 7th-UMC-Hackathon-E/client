import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainTodo.style';
import CheckFilledIcon from '@/assets/icons/mains/check.svg';
import CheckEmptyIcon from '@/assets/icons/mains/uncheck.svg';
import { getTodoslist } from '@/apis';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import unix_timeStamp_data from '@/components/common/Date';

const MainTodo = () => {
  // const [todos, setTodos] = useState(todosData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // React Query 클라이언트 사용
  const {
    data: todoData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todoList'], // 캐시 키
    //queryFn: () => getTodoslist(1, unix_timeStamp_data()), // API 호출 함수
    queryFn: () => getTodoslist(1, '2025-01-11'), // API 호출 함수
  });
  const todos = Array.isArray(todoData?.result) ? todoData?.result?.[0]?.todos : [];

  const handleNavigate = () => {
    navigate('/mypage');
  };
  const toggleTodo = (id) => {
    queryClient.setQueryData(['todoList'], (oldData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        result: oldData.result.map((resultItem) => ({
          ...resultItem,
          todos: resultItem.todos.map((todo) => (todo.id === id ? { ...todo, status: !todo.status } : todo)),
        })),
      };
    });
  };

  const calculateProgress = () => {
    if (todos.length === 0) return 0; // todos가 없을 때 0% 반환
    const completedCount = todos.filter((todo) => todo.status).length;
    return Math.round((completedCount / todos.length) * 100);
  };

  useEffect(() => {
    if (calculateProgress() === 100) {
      setIsModalOpen(true);
    }
  }, [todos]);

  return (
    <S.Container>
      <S.ProgressBadge>{calculateProgress()}%</S.ProgressBadge>
      <S.TodoWrapper>
        {todos.map((todo) => (
          <S.TodoItem key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.status ? (
              <img src={CheckFilledIcon} alt="완료" width="18px" height="18px" />
            ) : (
              <img src={CheckEmptyIcon} alt="미완료" width="18px" height="18px" />
            )}
            <S.TodoText isCompleted={todo.status}>{todo.description}</S.TodoText>
          </S.TodoItem>
        ))}
      </S.TodoWrapper>
      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalHeader>오늘의 목표 달성 레포트</S.ModalHeader>
            <S.PercentageText>100% 달성</S.PercentageText>

            <S.TodoStats>
              완료한 todo : {todos.length}개<br />
              완료하지 못한 todo : 0개
            </S.TodoStats>

            <S.CongratsMessage>
              완벽한 하루였어요!
              <br />
              목표를 100% 달성했네요. 대단해요.
              <br />이 흐름을 이어가면 더 큰 성취를 만들 수 있을 거예요! 🎉
            </S.CongratsMessage>

            <S.FeedbackLabel>오늘 당신의 노력은 빛났어요! 하고 싶은 말을 마음껏 남겨보세요!</S.FeedbackLabel>
            <S.FeedbackInput placeholder="응원의 메시지를 입력하세요." />

            <S.CloseButton onClick={handleNavigate}>종료하기</S.CloseButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default MainTodo;
