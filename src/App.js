import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './style.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import HomeHeader from './components/Home/HomeHeader';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Routes>
          <Route path='/' element={<HomeHeader />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
