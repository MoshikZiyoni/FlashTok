import './App.css';
import TikTokPromotionPage from './TikTok';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Terms from './Terms';
import Privacy from './Privacy';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <TikTokPromotionPage></TikTokPromotionPage> */}
      <Routes>
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path='/' element={<TikTokPromotionPage />} />
        {/* Add other routes here */}
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
