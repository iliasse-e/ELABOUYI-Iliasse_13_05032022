import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { connectAction, getUserAction } from "../../actions";
import { loginPost, LoginResponse } from "../../service/api-login";
import { tokenPost, UserType } from "../../service/api-token";
import Loader from "../loader";

interface isLoggedType {
  isLogged: boolean
}

/**
 * Sets and displays the logIn form
 * displays if not connected only
 * @param isLogged boolean state from store
 * @returns login form
 */
export const SignInForm = (isLogged: isLoggedType) : JSX.Element => {

  const [isLoading, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [connected, setConnected] = useState(isLogged.isLogged);
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoader(true);
    
    try {
      // First Api call to login and get token
      const response: LoginResponse = await loginPost(email, password);
      console.log(response)
      const accessToken: string = response?.data?.body?.token;
      const accessMessage: string = response?.data?.message;
      
      // Second Api call to get the profile by sending token
      const getUser: UserType = await tokenPost(accessToken);
      console.log(getUser)
      setConnected(true);
      
      // Updates redux store
      dispatch(connectAction(accessMessage, accessToken));
      dispatch(getUserAction(getUser.data.body));
    }
    
    catch (error) {
      setErrorMsg(error.response.data.message);
    }
    
    setLoader(false);
  }

  return connected ? (<Navigate to="/profile" />) : 
  (<>
    {isLoading ? <Loader/> : null} 
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
      <label htmlFor="password">Password</label
      ><input 
      type="password" 
      id="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required />
    </div>
    <div className="input-remember">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>
    <button className="sign-in-button">Sign In</button>
    <p className="error-msg" color="red">{errorMsg}</p>
  </form>
  </>)
}