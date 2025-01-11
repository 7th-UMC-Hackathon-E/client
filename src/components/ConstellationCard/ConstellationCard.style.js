import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 140px;
  padding: 10px;
  border-radius: 10px;
  border: ${({ isHighlighted }) => (isHighlighted ? '1px solid #D9C48B' : 'none')};
  box-shadow: ${({ isHighlighted }) => (isHighlighted ? '0 0 10px rgba(217, 196, 139, 0.5)' : 'none')};
`;

export const GlowCircle = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgba(242, 219, 149, ${({ rank }) => (rank <= 3 ? 0.15 : 0.05)});
  filter: blur(${({ rank }) => (rank <= 3 ? '15px' : '17.5px')});
  z-index: -1;
`;

export const StarImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  z-index: 1;
`;

export const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 2px;
  right: 8px;
  display: flex;
  align-items: center;
`;

export const CrownIcon = styled.img`
  width: 10px;
  height: 10px;
`;

export const Username = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
`;
