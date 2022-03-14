import React, { FormEvent, FormEventHandler, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { connectAction } from "../../actions";
import { loginPost, LoginResponse } from "../../service/postLogin";

export const SignInForm = (isLogged: any):JSX.Element => {

  const isLoggedIn: Boolean = useSelector((state: RootStateOrAny) => state)
  console.log(isLogged)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [connected, setConnected] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
        const response: LoginResponse = await loginPost(email, password);
        const accessToken: String = response?.data?.body?.token;
        const accessMessage: String = response?.data?.message;

        console.log(email, password, response, accessMessage, accessToken);

        setConnected(true);
        dispatch(connectAction(accessMessage, accessToken));
        
      }
      catch (error) {
        if (error.type === 404) {
          console.log("Not found")
        }
        else {
          console.log("No server response")
        }
      }
    }

    return !isLogged ? (<form onSubmit={handleSubmit}>
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
    {
    /*<!-- PLACEHOLDER DUE TO STATIC SITE -->
    <a href="./user.html" className="sign-in-button">Sign In</a>
    <!-- SHOULD BE THE BUTTON BELOW -->
    <!-- <button className="sign-in-button">Sign In</button> -->
    <!--  --> 
    We'll use a <Redirect />component
    */
    }
  </form>) : (<Navigate to="/user"/>)
}