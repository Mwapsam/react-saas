import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics, Dashboard, Music } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="admin-music" element={<Music />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
