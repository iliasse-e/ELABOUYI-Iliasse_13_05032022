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
import { userStateType } from './reducers/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { disconnectAction } from './actions';
import { hasToBeLogoutOnRefresh, isTokenExpired } from './service/token/token';

const App = () : JSX.Element => {
  
  const isLoggedIn: boolean = useSelector((state: RootStateOrAny) => state.auth.isLogged) //redux State
  const user: userStateType = useSelector((state: RootStateOrAny) => state.user);
  const token: string = useSelector((state: RootStateOrAny) => state.auth.token);
  const isToRemember: boolean = useSelector((state: RootStateOrAny) => state.auth.remember);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // avoid user to be logged after refresh if not "remember"
    if (hasToBeLogoutOnRefresh(isToRemember, isLoggedIn)) dispatch(disconnectAction());
    // checks if token is still valid every minute
    setInterval(() => {
      isTokenExpired(token, isLoggedIn)
    }, 60000)
  }, [])

  return (
    <Router>
      <div className='App'>
        <Navigation isLogged={isLoggedIn} user={user} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage user={user} token={token} isLogged={isLoggedIn} />} />
          <Route path="/login" element={<SignInPage isLogged={isLoggedIn} />} />
        </Routes>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
