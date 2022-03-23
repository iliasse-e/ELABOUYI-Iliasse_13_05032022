import { RootStateOrAny, useSelector } from "react-redux";
import { SignInForm } from "../components/login/sign-in-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export const SignInPage = (isLogged: any): JSX.Element => {

    const isLoggedIn: boolean = useSelector((state: RootStateOrAny) => state.auth.isLogged)

    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className="sign-in-icon" icon={faCircleUser} />
                <h1>Sign In</h1>
                <SignInForm isLogged={isLogged.isLogged} />
            </section>
        </main>
    </> 
}