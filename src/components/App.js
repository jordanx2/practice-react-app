import '../css/App.css';
import Header from './Header';
import Search from './Search';
import Home from './Home';
import Till from './Till';
import Diary from './Diary';
import BackOffice from './BackOffice';
import Config from './Config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="search-general" element={<Search/>} />
          <Route path="diary" element={<Diary/>} />
          <Route path="back-office" element={<BackOffice/>} />
          <Route path="config" element={<Config/>} />
          <Route path="till" element={<Till />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;