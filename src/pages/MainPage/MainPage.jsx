import StatusBar from '@/components/StatusBar/StatusBar';
import * as S from '@/pages/MainPage/MainPage.style';
import ConstellationCard from '@/components/ConstellationCard/ConstellationCard';
import MainTodo from '@/components/MainTodo/MainTodo';

const constellationsData = [
  { userId: 1, username: '유저명', image: 'https://i.ibb.co/c3Xx12S/star-user.png', rank: 4 },
  { userId: 2, username: '유저명2', image: 'https://i.ibb.co/0hBsLVD/star-yellow1.png', rank: 1 },
  { userId: 3, username: '유저명3', image: 'https://i.ibb.co/JnTTQwp/star-yellow2.png" alt="star-yellow2', rank: 2 },
  { userId: 4, username: '유저명4', image: 'https://i.ibb.co/Qm8rvgw/star-grey1.png', rank: 5 },
  { userId: 5, username: '유저명5', image: 'https://i.ibb.co/0hBsLVD/star-yellow1.png', rank: 3 },
  { userId: 6, username: '유저명6', image: 'https://i.ibb.co/cvB7MxK/star-grey2.png', rank: 6 },
];

const MainPage = () => {
  return (
    <>
      <StatusBar rank={4} participants={6} />
      <S.Container>
        {constellationsData.map(({ userId, username, image, rank }) => (
          <ConstellationCard key={userId} userId={userId} username={username} image={image} rank={rank} />
        ))}
      </S.Container>
      <S.TodoSection>
        <MainTodo />
      </S.TodoSection>
    </>
  );
};

export default MainPage;
