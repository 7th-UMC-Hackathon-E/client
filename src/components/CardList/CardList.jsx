import React from 'react';
import Card from '@/components/Card/Card';
import * as S from './CardList.style';

//TODO: API 수정
const cardsData = [
  {
    id: 1,
    title: '히아데스',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/vXr9Mtq/star4.png',
    bottomTitle: 'Title1',
  },
  {
    id: 2,
    title: '머리털자리',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/pLKKcMB/image.png',
    bottomTitle: 'Title2',
  },
  {
    id: 3,
    title: '오마크론 별포름',
    isActive: false,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/HYgNWYh/image.png',
    bottomTitle: 'Title3',
  },
  {
    id: 4,
    title: '오마크론 별포름',
    isActive: false,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/gF0N4c6/2.png',
    bottomTitle: 'Title4',
  },
];

// 개씩 그룹화하는 함수
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const CardList = () => {
  const groupedCards = chunkArray(cardsData, 2);

  return (
    <>
      {groupedCards.map((group, index) => (
        <React.Fragment key={index}>
          <S.CardGrid>
            {group.map((card) => (
              <Card
                key={card.id}
                isActive={card.isActive}
                title={card.title}
                participants={card.participants}
                maxParticipants={card.maxParticipants}
                bgImage={card.bgImage}
                bottomTitle={card.bottomTitle}
              />
            ))}
          </S.CardGrid>
          {index < groupedCards.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
    </>
  );
};

export default CardList;
