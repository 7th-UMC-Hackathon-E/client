import * as S from '@/components/Card/Card.style';
import LockIcon from '@/assets/icons/lock.svg';
import StarIcon from '@/assets/icons/stars/star1.svg';

const Card = ({ isActive, title, participants, maxParticipants, bgImage, bottomTitle }) => {
  return (
    <S.CardWrapper>
      <S.CardContainer isActive={isActive} bgImage={bgImage}>
        {!isActive ? (
          <S.LockIconStyled src={LockIcon} alt="Lock Icon" />
        ) : (
          <>
            <S.Participants>
              {participants}명 / {maxParticipants}명
            </S.Participants>
            <S.StarIconStyled src={StarIcon} alt="Star Icon" />
          </>
        )}
        <S.TitleButton isActive={isActive}>{title}</S.TitleButton>
      </S.CardContainer>
      <S.BottomTitle>{bottomTitle}</S.BottomTitle>
    </S.CardWrapper>
  );
};

export default Card;
