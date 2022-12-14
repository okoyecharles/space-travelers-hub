import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Rocket from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
