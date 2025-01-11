import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProgressBadge = styled.div`
  align-self: flex-start;
  padding: 5px 10px;
  background-color: #f2db95;
  color: #000;
  font-weight: bold;
  border-radius: 20px;
  font-size: 14px;
`;

export const TodoWrapper = styled.div`
  max-height: 100px;
  overflow-y: auto;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const TodoText = styled.span`
  font-size: 14px;
  color: ${({ isCompleted }) => (isCompleted ? '#F2DB95' : '#ccc')};
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;

/* 모달 스타일 */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100vw;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.h2`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const PercentageText = styled.h1`
  font-size: 28px;
  color: #000;
  margin-bottom: 15px;
`;

export const TodoStats = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

export const CongratsMessage = styled.p`
  font-size: 14px;
  color: #999;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const FeedbackLabel = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const FeedbackInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const CloseButton = styled.button`
  width: 100%;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #f2db95;
  color: ${({ theme }) => theme.colors.brown[700]};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6c27a;
  }
`;
