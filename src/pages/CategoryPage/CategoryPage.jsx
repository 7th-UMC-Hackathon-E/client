import { useNavigate } from 'react-router-dom';
import Typography from '@/components/Typography';
import * as S from '@/pages/CategoryPage/CategoryPage.style';
import CardList from '@/components/CardList/CardList';

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/todos');
  };
  return (
    <S.Container>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography varient="h2" style={{ paddingLeft: 33, marginBottom: 20 }}>
          Group
        </Typography>
        <button onClick={handleNavigate}>오늘의 To Do</button>
      </div>
      <CardList />
    </S.Container>
  );
};

export default CategoryPage;
