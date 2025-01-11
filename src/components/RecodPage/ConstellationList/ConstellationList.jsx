import * as S from './ConstellationList.style';

const ConstellationList = ({ constellations, onCardClick }) => {
  return (
    <S.Container>
      {constellations.map((item, index) => (
        <S.Card key={index} onClick={() => onCardClick(item)} isCompleted={item.percentage === 100}>
          <S.CardContent>
            <S.PercentageContainer>
              <S.Percentage>{item.percentage}%</S.Percentage>
            </S.PercentageContainer>
            <S.Image src={item.image} alt="Constellation" />
            <S.DateContainer>
              <S.Date>{item.date}</S.Date>
            </S.DateContainer>
          </S.CardContent>
        </S.Card>
      ))}
    </S.Container>
  );
};

export default ConstellationList;
