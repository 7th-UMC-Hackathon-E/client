import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 40px;
`;

export const Title = styled.div`
  width: 100%;
  padding: 0px 33px 0px 33px;
  margin-bottom: 20px;
  p {
    color: var(--Primary-Brown-300, #dac7a7);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
`;
export const Image = styled.img`
  width: 393px;
  height: 306.441px;
  flex-shrink: 0;
  object-fit: cover;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 16px 0px 17px;
  margin-top: 26px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  padding: 12px 16px 12px 16px;
  p {
    color: var(--Primary-Brown-300, #dac7a7);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--Neutral-300, #e2e2e2);
    font-size: 16px;
    stroke-width: 0.5px;
    stroke: var(--Primary-Brown-300, #dac7a7);
  }
`;

export const Button = styled.button`
  padding: 12px;
  margin: 41px 16px 0px 16px;
  background: var(--Primary-Brown-300, #dac7a7);
  color: var(--Primary-Brown-700, #5a4726);
  font-size: 18px;
  border: none;
  border-radius: 5px;

  font-weight: bold;
`;
