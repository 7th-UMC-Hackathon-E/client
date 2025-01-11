import * as S from '@/pages/SplashPage/SplashPage.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    birth: '',
  });

  // 입력
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const goToMypage = () => {
    navigate('/mypage');
  };

  return (
    <S.Container>
      <S.Title>
        <p>서비스명</p>
      </S.Title>
      <S.Image src="/images/login_img.png" alt="Login Image" />
      <S.Form>
        <S.FormGroup>
          <p>이름</p>
          <input name="name" value={input.name} onChange={handleInput} placeholder="이름을 입력하세요" />
        </S.FormGroup>
        <S.FormGroup>
          <p>생년월일</p>
          <input name="birth" value={input.birth} onChange={handleInput} type="date" placeholder="YYYY-MM-DD" />
        </S.FormGroup>
        <S.Button onClick={goToMypage}>서비스 입장하기</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default SplashPage;
