import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 40px 27px 0px 27px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.brown[300]};
  padding-bottom: 13px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.neutral[300]};
  height: 72px;
  border: none;
  padding: 10px;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 5px 9px 5px 9px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  background: ${({ theme }) => theme.colors.neutral[300]};
  resize: none;
  overflow-y: auto;

  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
    font-size: 13px;
    position: absolute;
    top: 5px;
    left: 9px;
  }
`;

export const EnterButton = styled.button`
  background-color: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: none;
`;

export const TodoList = styled.div`
  margin-top: 2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 60vh;
  gap: 2vh;
  overflow-y: auto;
  margin-bottom: 3vh;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
