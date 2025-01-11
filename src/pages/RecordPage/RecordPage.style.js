import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/backgroundBlue.png');
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;
export const Button = styled.button`
  border: none;
  background-color: inherit;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
