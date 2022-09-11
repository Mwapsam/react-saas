import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Music } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="admin-music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
