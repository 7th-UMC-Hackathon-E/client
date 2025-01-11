import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 39px 17px 95px 17px;
  width: 100vw;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1001;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 20px;
  padding: 20px 16px 24px 76px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Percentage = styled.div`
  color: #000;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const Text = styled.div`
  width: 345px;
  height: 15px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 5px;
`;

export const CompleteList = styled.div`
  margin: 0px 16px 0px 16px;
`;
export const Br = styled.div`
  height: 7px;
  width: 100%;
  background: #f9f9f9;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 16px;
  height: 100px;
  padding: 0px 16px;
  border-radius: 5px;
  background: #f9f9f9;

  p {
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
  }
`;

export const SubTitle = styled.div`
  margin-left: 16px;
  height: 17px;
  align-self: stretch;
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  height: 17px;
  align-self: stretch;
`;
