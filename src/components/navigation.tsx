import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import logo from "../assets/img/argentBankLogo.png"

interface isLoggedType {
  isLogged: Boolean
}

/**
 * Navigation component
 * Called in ** component/page
 * @returns navigation bar
 */
export const Navigation: React.FC<isLoggedType> = (isLogged) : JSX.Element => {
  console.log(isLogged.isLogged)

    return <nav className="main-nav">
    <a className="main-nav-logo" href="./">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    {
    isLogged.isLogged ? 
    (
    <div>
    <a className="main-nav-item" href="./user.html">
      <i className="fa fa-user-circle"></i>
      Tony
    </a>
    <a className="main-nav-item" href="./index.html">
      <i className="fa fa-sign-out"></i>
      Sign Out
    </a>
    </div>
    ) :
    (
    <div>
      <a className="main-nav-item" href="./login">
        <i className="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
    )
  }
  </nav>

  
}