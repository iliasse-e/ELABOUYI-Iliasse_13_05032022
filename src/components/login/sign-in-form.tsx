import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { connectAction } from "../../actions";
import { fetchLogin, LoginResponse } from "../../service/api/api-login";
import Loader from "../loader";

/**
 * Sets and displays the logIn form
 * displays if not connected only
 * @param isLogged boolean state to get from store
 * @returns login form
 */
export const SignInForm: React.FC<{isLogged: boolean}> = ({ isLogged }) : JSX.Element => {

  const [isLoading, setLoader] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [connected, setConnected] = useState<boolean>(isLogged);
  const [rememberUser, toggleRememberUser] = useState<boolean>(false)
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoader(true);
    
    try {
      // Api call to login and get token
      const response: LoginResponse = await fetchLogin(email, password);
      const accessToken: string = response?.data?.body?.token;
      const accessMessage: string = response?.data?.message;
      
      // Stores api response in redux (token, message and remember)
      dispatch(connectAction(accessMessage, accessToken, rememberUser));

      console.log(accessMessage, accessToken, rememberUser)

      // connects user
      setConnected(true);
    }
    catch (error) {
      setErrorMsg(error.response.data.message);
    }
    setLoader(false);
  }

  return connected ? (<Navigate to="/profile" />) : 
  (<>
    {isLoading && <Loader/>} 
    <form method="post" 
    onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        id="username" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onClick={() => toggleRememberUser(!rememberUser)} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
      <p className="error-msg" color="red">{errorMsg}</p>
    </form>
  </>)
}