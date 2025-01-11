import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 16px 23px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
`;
export const Text = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 16px;
  color: white;
  color: #fff;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const CancelButton = styled.button`
  background-color: transparent;
  border: none;
`;
