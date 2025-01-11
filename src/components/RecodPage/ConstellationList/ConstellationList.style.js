import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 32px;
`;

export const Card = styled.div`
  width: 100%;
  aspect-ratio: 163 / 199;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(242, 219, 149, 0.3);
  backdrop-filter: blur(20px);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  //border: 1px solid var(--Accent-Yellow-500, #f2db95);
`;

export const CardContent = styled.div`
  padding: 12px;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const PercentageContainer = styled.div`
  width: 100%;
`;

export const Percentage = styled.div`
  color: var(--Accent-Yellow-500, #f2db95);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;
export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Date = styled.div`
  color: var(--Neutral-100, #f9f9f9);
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
