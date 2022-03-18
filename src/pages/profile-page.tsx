import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../actions";
import { Account } from "../components/profile/account";
import { UpdateProfile } from "../components/profile/modify-profile";
import { userStateType } from "../reducers/user";

const amounts:Number[] = [2082.79, 10928.42, 184.30];
const titles: String[] = ["Argent Bank Checking (x8349)", "Argent Bank Savings (x6712)", "Argent Bank Credit Card (x8349)"];
const descriptions: String[] = ["Available Balance","Current Balance"];

export const ProfilePage = () : JSX.Element => {
  
  const user: userStateType = useSelector((state: RootStateOrAny) => state.user);
  const editProfile: userStateType = useSelector((state: RootStateOrAny) => state.editProfile);
  const dispatch = useDispatch()

  const [updateUser, setUpdateUser] = useState(false);
  const currentFirstName = user.firstName;
  const currentlastName = user.lastName;

  return  <main className="main bg-dark">
    <div className="header">

      {editProfile ? (<UpdateProfile user={user} />) : 
        (<>
          <h1>Welcome back<br />{currentFirstName + " " + currentlastName} !</h1>
          <button className="edit-button" onClick={(e) => dispatch(editProfileAction())}>Edit Name</button>
        </>) 
      }

    </div>
    <h2 className="sr-only">Accounts</h2>
    <Account title={titles[0]} amount={amounts[0]} description={descriptions[0]} />
    <Account title={titles[1]} amount={amounts[1]} description={descriptions[0]} />
    <Account title={titles[2]} amount={amounts[2]} description={descriptions[2]} />
  </main>
}