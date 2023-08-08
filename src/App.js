import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/logins/Login';
import LandingPage from './components/blogsAcions/LandingPage';
import NoPage from './components/blogsAcions/NoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landingPage/*" element={<LandingPage />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
