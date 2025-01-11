import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from '@/pages/SplashPage';
import TodoPage from '@/pages/SplashPage';
import CategoryPage from '@/pages/CategoryPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import RecordPage from '@/pages/RecordPage';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/records" element={<RecordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
