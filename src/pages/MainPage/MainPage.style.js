import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 20px;
  padding-top: 8px;
  justify-items: center;
`;

export const TodoSection = styled.div`
  display: flex;
  justify-content: center;
`;
