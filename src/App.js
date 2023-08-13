import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './style.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
