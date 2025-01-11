import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  justify-items: center;
  padding: 20px;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #ccc;
`;
