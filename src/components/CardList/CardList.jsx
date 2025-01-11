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
    bottomTitle: '토익 / 텝스 공부',
    starIcon: 'https://i.ibb.co/J23wMFc/Group-Icon1.png',
  },
  {
    id: 2,
    title: '머리털자리',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/pLKKcMB/image.png',
    bottomTitle: '공무원 시험 준비',
    starIcon: 'https://i.ibb.co/G08Tczg/Group-Icon2.png',
  },
  {
    id: 3,
    title: '오마크론 별포름',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/HYgNWYh/image.png',
    bottomTitle: '새벽 공부방',
    starIcon: 'https://i.ibb.co/ZHj0T3T/Group-Icon3.png',
  },
  {
    id: 4,
    title: '소원의 우물',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/gF0N4c6/2.png',
    bottomTitle: '프로그래밍 언어 학습',
    starIcon: 'https://i.ibb.co/Tc5Wq2M/Group-Icon4.png',
  },
  {
    id: 5,
    title: '보석상자',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/YbqHc6D/2025-01-12-3-35-40-1.png',
    bottomTitle: '코딩 테스트 준비',
    starIcon: 'https://i.ibb.co/FqXPV44/Group-Icon5.png',
  },
  {
    id: 6,
    title: '오메가 센타우리',
    isActive: true,
    participants: 0,
    maxParticipants: 6,
    bgImage: 'https://i.ibb.co/jRfDMn6/A-Snapshot-of-the-Jewel-Box-cluster-with-the-ESO-VLT-2.png',
    bottomTitle: '알고리즘',
    starIcon: 'https://i.ibb.co/wWZ8JWh/Group-Icon6.png',
  },
];

// 2개씩 그룹화하는 함수
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
                starIcon={card.starIcon}
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
