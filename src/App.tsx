import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/home-page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { SignInPage } from './pages/sign-in-page';
import { Navigation } from './components/navigation';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Footer } from './components/footer';
import { ProfilePage } from './pages/profile-page';

const App = () : JSX.Element => {
  
  const isLoggedIn: boolean = useSelector((state: RootStateOrAny) => state.auth.isLogged)

  return (
    <Router>
      <div className='App'>
        <Navigation isLogged={isLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<SignInPage isLogged={isLoggedIn} />} />
        </Routes>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
