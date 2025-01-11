import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 20px;
  padding-top: 8px;
  justify-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/images/backgroundBlue.png');
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

export const TodoSection = styled.div`
  display: flex;
  justify-content: center;
`;
