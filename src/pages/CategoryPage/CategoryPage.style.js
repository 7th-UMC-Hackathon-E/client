import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  color: ${({ theme }) => theme.colors.brown[300]};
`;
