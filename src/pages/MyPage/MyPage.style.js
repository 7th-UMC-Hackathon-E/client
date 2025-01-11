import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  padding-left: 27px;
  padding-right: 27px;
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  height: 92px;
  background-color: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.brown[300]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.brown[300]};
`;

export const UnionImage = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  font-size: 35px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.yellow[500]};
`;

export const mainUnionImage = styled.img`
  width: 100vw;
  height: 40vh;
  margin-top: 6vh;
  margin-bottom: 6vh;
  object-fit: contain;
`;

export const nameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.brown[300]};
  background: rgba(255, 255, 255, 0.2);
`;

export const name = styled.p`
  color: ${({ theme }) => theme.colors.neutral[100]};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  margin-top: 4vh;
  gap: 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 10vh;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.brown[300]};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brown[900]};
  cursor: pointer;
`;
