import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { disconnectAction } from "../actions";
import logo from "../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { userStateType } from "../reducers/user";


/**
 * Navigation component
 * Called in App
 * @param isLogged login state to get from store
 * @param user user to get from store
 * @returns navigation bar
 */
export const Navigation: React.FC<{isLogged: boolean, user: userStateType}> = ({isLogged, user}) : JSX.Element => {

  const firstName: string = user.firstName
  const dispatch = useDispatch();

    return <nav className="main-nav">
    <Link className="main-nav-logo" to="./">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    {
    isLogged ? 
    (
    <div>
    <Link className="main-nav-item" to="./profile">
      <FontAwesomeIcon className="fa" icon={faCircleUser} />
      {firstName}
    </Link>
    <Link className="main-nav-item" to="./" onClick={(e) => dispatch(disconnectAction())}>
      <FontAwesomeIcon icon={faSignOut} />
      Sign Out
    </Link>
    </div>
    ) :
    (
    <div>
      <Link className="main-nav-item" to="./login">
        <FontAwesomeIcon icon={faCircleUser} />
        Sign In
      </Link>
    </div>
    )
  }
  </nav>

  
}