import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, UserPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
