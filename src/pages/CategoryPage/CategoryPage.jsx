import { useNavigate } from 'react-router-dom';
import Typography from '@/components/Typography';
import * as S from '@/pages/CategoryPage/CategoryPage.style';
import CardList from '@/components/CardList/CardList';
import { Button } from '@/components/common/Button/Button';

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/todos');
  };
  return (
    <S.Container>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography varient="h2" style={{ paddingLeft: 33, marginBottom: 20 }}>
          Group
        </Typography>
        <Button text="오늘의 To Do" onClick={handleNavigate} />
      </div>
      <CardList />
    </S.Container>
  );
};

export default CategoryPage;
