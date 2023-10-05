import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/logins/Login';
import ForgotPw from './components/logins/ForgotPw';
import LandingPage from './components/blogsAcions/LandingPage';
import EditBlog from './components/blogsAcions/EditBlog';
import NoPage from './components/blogsAcions/NoPage';
import { AuthProvider } from './components/context/AuthContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPw />} />
          <Route path="/landingPage/*" element={<LandingPage />}/>
          {/* <Route path="/edit/:id" element={<EditBlog/>} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
