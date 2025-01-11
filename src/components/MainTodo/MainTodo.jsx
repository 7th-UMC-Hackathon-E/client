import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MainTodo.style';
import CheckFilledIcon from '@/assets/icons/mains/check.svg';
import CheckEmptyIcon from '@/assets/icons/mains/uncheck.svg';

const todosData = [
  { id: 1, title: '할 일 1', isCompleted: false },
  { id: 2, title: '할 일 2', isCompleted: false },
  { id: 3, title: '할 일 3', isCompleted: false },
];

const MainTodo = ({ updateImages }) => {
  const [todos, setTodos] = useState(todosData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mypage');
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    setTodos(updatedTodos);
  };

  const calculateProgress = () => {
    const completedCount = todos.filter((todo) => todo.isCompleted).length;
    return Math.round((completedCount / todos.length) * 100);
  };

  useEffect(() => {
    const progress = calculateProgress();
    updateImages(progress);

    if (progress === 100) {
      setIsModalOpen(true);
    }
  }, [todos]);

  return (
    <S.Container>
      <S.ProgressBadge>{calculateProgress()}%</S.ProgressBadge>
      <S.TodoWrapper>
        {todos.map((todo) => (
          <S.TodoItem key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.isCompleted ? (
              <img src={CheckFilledIcon} alt="완료" width="18px" height="18px" />
            ) : (
              <img src={CheckEmptyIcon} alt="미완료" width="18px" height="18px" />
            )}
            <S.TodoText isCompleted={todo.isCompleted}>{todo.title}</S.TodoText>
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
