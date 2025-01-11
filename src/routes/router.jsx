import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from '@/pages/SplashPage/SplashPage';
import TodoPage from '@/pages/SplashPage/SplashPage';
import CategoryPage from '@/pages/CategoryPage/CategoryPage';
import MainPage from '@/pages/MainPage/MainPage';
import MyPage from '@/pages/MyPage/MyPage';
import RecordPage from '@/pages/RecordPage/RecordPage';
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
