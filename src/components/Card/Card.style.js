import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const CardContainer = styled.div`
  width: 163px;
  height: 140px;
  border-radius: 10px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  border: 2px solid ${({ isActive }) => (isActive ? '#D9C48B' : '#666')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ isActive }) => (isActive ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
`;

export const LockIconStyled = styled.img`
  position: absolute;
  top: 44px;
  width: 30px;
  height: 30px;
`;

export const StarIconStyled = styled.img`
  position: absolute;
  top: 20%;
  width: 30%;
  height: auto;
  object-fit: contain;
`;

export const Participants = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  color: #d9c48b;
`;

export const TitleButton = styled.button`
  position: absolute;
  bottom: 8px;
  width: 80%;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #d9c48b;
  color: #d9c48b;
  font-size: 12px;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

export const BottomTitle = styled.div`
  padding-top: 12px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: #ffffff;
`;
