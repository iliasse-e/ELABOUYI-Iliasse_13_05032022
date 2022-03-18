import React, { FormEvent, FormEventHandler, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { connectAction, getUserAction } from "../../actions";
import { loginPost, LoginResponse } from "../../service/api-login";
import { tokenPost } from "../../service/api-user-profile";

interface isLoggedType {
  isLogged: Boolean
}

export const SignInForm = (isLogged: isLoggedType):JSX.Element => {

  console.log(isLogged.isLogged)

    const [isLoading, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [connected, setConnected] = useState(isLogged.isLogged);
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
        const response: LoginResponse = await loginPost(email, password);
        const accessToken: String = response?.data?.body?.token;
        const accessMessage: String = response?.data?.message;
        // token post request
        const getUser:any = await tokenPost(accessToken);
        console.log(email, password, response, accessMessage, accessToken);

        setConnected(true);
        // redux store update
        dispatch(connectAction(accessMessage, accessToken));
        dispatch(getUserAction(getUser.data.body));
        
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

    return connected ? (<Navigate to="/profile"/>) : (<form onSubmit={handleSubmit}>
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
    
  </form>)
}