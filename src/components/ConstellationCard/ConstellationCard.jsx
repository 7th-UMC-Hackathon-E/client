import React from 'react';
import CrownIcon from '@/assets/icons/crown.svg';
import * as S from './ConstellationCard.style';

const ConstellationCard = ({ userId, username, image, rank }) => {
  return (
    <S.CardWrapper isHighlighted={userId === 1}>
      <S.GlowCircle rank={rank} />
      <S.StarImage src={image} alt={`${username}의 별자리`} />
      <S.UsernameWrapper>
        {rank <= 3 && <S.CrownIcon src={CrownIcon} alt="Crown Icon" />}
        <S.Username>{username}</S.Username>
      </S.UsernameWrapper>
    </S.CardWrapper>
  );
};

export default ConstellationCard;
