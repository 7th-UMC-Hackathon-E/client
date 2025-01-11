import * as S from '@/pages/MyPage/MyPage.style';

const MyPage = () => {
  return (
    <S.Container>
      <S.TimerContainer>
        <S.UnionImage src="/images/mypage_union.png" alt="Union Image" />
        <S.Timer>00:00:00</S.Timer>
        <S.UnionImage src="/images/mypage_union.png" alt="Union Image" />
      </S.TimerContainer>
      <S.mainUnionImage src="/images/mypage_mainUnion.png" alt="Main Union Image" />
      <S.nameDiv>
        <S.name>이름</S.name>
      </S.nameDiv>
      <S.ButtonsContainer>
        <S.Button>ToDo 작성</S.Button>
        <S.Button>이전 기록 보기</S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default MyPage;
