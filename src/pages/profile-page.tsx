import { useEffect, useState } from "react";
import { Account } from "../components/profile/account";
import { UpdateProfile } from "../components/profile/update-profile";
import { userStateType } from "../reducers/user";
import { titles, amounts, descriptions } from "../data/data"
import { ProfileEditor } from "../components/profile/profile-editor";
import { useDispatch } from "react-redux";
import { fetchUser } from "../service/api/api-user";
import { getUserAction } from "../actions";
import { Navigate } from "react-router-dom";

/**
 * Sets and displays profile page
 * called in App
 * @param user current stored user
 * @param token current stored token
 * @returns profile page
 */
export const ProfilePage: React.FC<{user: userStateType, token: string, isLogged: boolean}> = ({user, token, isLogged}) : JSX.Element => {

  // if not logged navigate to home page
  const [updateUser, setUpdateUser] = useState<boolean>(false);
  const currentFirstName = user.firstName;
  const currentlastName = user.lastName;
  const dispatch = useDispatch();

  // Api call to get the profile by sending token previously stored from logIn page
  useEffect(() => {
    fetchUser(token)
    .then(user => dispatch(getUserAction(user.data.body)))
    .catch(err => console.log('error on getting user : ' + err))
  },[token, dispatch])

  if (!isLogged) return (<Navigate to="/" />)

  return  <main className="main bg-dark">
    <div className="header">
      {
      updateUser
      ?
      (<UpdateProfile user={user} onCancel={setUpdateUser} />) 
      :
      (<ProfileEditor firstName={currentFirstName} lastName={currentlastName} onClick={setUpdateUser} />)
      }
    </div>
    <h2 className="sr-only">Accounts</h2>
    <Account title={titles[0]} amount={amounts[0]} description={descriptions[0]} />
    <Account title={titles[1]} amount={amounts[1]} description={descriptions[0]} />
    <Account title={titles[2]} amount={amounts[2]} description={descriptions[2]} />
  </main>
}