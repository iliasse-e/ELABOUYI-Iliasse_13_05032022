import { SignInForm } from "../components/login/sign-in-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

interface isLoggedType {
    isLogged: boolean
}

/**
 * Sets and displays the logIn page
 * Called in App
 * @param isLogged boolean state from store
 * @returns login page
 */
export const SignInPage = (isLogged: isLoggedType): JSX.Element => {

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