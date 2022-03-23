import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Account } from "../components/profile/account";
import { UpdateProfile } from "../components/profile/update-profile";
import { userStateType } from "../reducers/user";

const amounts:number[] = [2082.79, 10928.42, 184.30];
const titles: string[] = ["Argent Bank Checking (x8349)", "Argent Bank Savings (x6712)", "Argent Bank Credit Card (x8349)"];
const descriptions: string[] = ["Available Balance","Current Balance"];

export const ProfilePage = () : JSX.Element => {
  
  const user: userStateType = useSelector((state: RootStateOrAny) => state.user);

  const [updateUser, setUpdateUser] = useState(false);
  const currentFirstName = user.firstName;
  const currentlastName = user.lastName;

  return  <main className="main bg-dark">
    <div className="header">

      {updateUser ? (<UpdateProfile user={user} onCancel={setUpdateUser}/>) : 
        (<>
          <h1>Welcome back<br />{currentFirstName + " " + currentlastName} !</h1>
          <button className="edit-button" onClick={() => setUpdateUser(true)}>Edit Name</button>
        </>)
      }

    </div>
    <h2 className="sr-only">Accounts</h2>
    <Account title={titles[0]} amount={amounts[0]} description={descriptions[0]} />
    <Account title={titles[1]} amount={amounts[1]} description={descriptions[0]} />
    <Account title={titles[2]} amount={amounts[2]} description={descriptions[2]} />
  </main>
}