import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes />
    </HashRouter>
  );
}

export default App;
