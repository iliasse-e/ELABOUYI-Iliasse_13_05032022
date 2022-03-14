import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Footer } from "../components/footer";
import { SignInForm } from "../components/login/sign-in-form";
import { Navigation } from "../components/navigation";

export const SignInPage = (): JSX.Element => {
    const isLoggedIn: Boolean = useSelector((state: RootStateOrAny) => state.isLogged)
    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <SignInForm isLogged={isLoggedIn} />
            </section>
        </main>
    </> 
}