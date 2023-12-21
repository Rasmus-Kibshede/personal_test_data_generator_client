import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../ui/components/Layout';
import Home from '../ui/pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../ui/pages/Profile';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute redirectPath="/" />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
