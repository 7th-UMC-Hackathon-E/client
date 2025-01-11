import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 7px 15px;
  background-color: inherit;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.brown[300]};
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.brown[300]};
`;
