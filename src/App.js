import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="myProfile" element={<MyProfile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
