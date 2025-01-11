import { useNavigate } from 'react-router-dom';
import * as S from '@/components/Card/Card.style';
import LockIcon from '@/assets/icons/lock.svg';

const Card = ({ isActive, title, participants, maxParticipants, bgImage, bottomTitle, starIcon }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/main');
  };
  return (
    <button onClick={handleNavigate} style={{ all: 'unset' }}>
      <S.CardWrapper>
        <S.CardContainer isActive={isActive} bgImage={bgImage}>
          {!isActive ? (
            <S.LockIconStyled src={LockIcon} alt="Lock Icon" />
          ) : (
            <>
              <S.Participants>
                {participants}명 / {maxParticipants}명
              </S.Participants>
              <S.StarIconStyled src={starIcon} alt="Star Icon" />
            </>
          )}
          <S.TitleButton isActive={isActive}>{title}</S.TitleButton>
        </S.CardContainer>
        <S.BottomTitle>{bottomTitle}</S.BottomTitle>
      </S.CardWrapper>
    </button>
  );
};

export default Card;
