import React, { FormEvent, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { cancelEditProfileAction, updateProfileAction } from "../../actions";
import { userStateType } from "../../reducers/user";
import { updatePost } from "../../service/api-update-profile";

export const UpdateProfile: React.FC<userStateType> = (user) : JSX.Element => {

    const [currentFirstName, setFirstName] = useState(user.firstName);
    const [currentLastName, setLastName] = useState(user.lastName);

    const accessToken = useSelector((state: RootStateOrAny) => state.auth.token);
    const userEmail = useSelector((state: RootStateOrAny) => state.user.email);
    const userPassword = useSelector((state: RootStateOrAny) => state.user.password);

    const dispatch = useDispatch()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // make axios API call
        try {
            const response: any = await updatePost(currentFirstName, currentLastName, accessToken);
            const accessMessage: String = response?.data?.message;
            const newFirstName: String =response?.data?.body.firstName;

            console.log("new firstname ", newFirstName)
            
            // redux store update
            dispatch(updateProfileAction({firstName: currentFirstName, lastName: currentLastName, email: userEmail, password: userPassword}))
            dispatch(cancelEditProfileAction())
          }
          catch (error) {
            if (error.type === 404) {
              console.log("Not found")
            }
            else {
              console.log("No server response")
            }
          }
        // redux action dispach
    }

    const clear = () => {
      dispatch(cancelEditProfileAction())
    }

    return <form className="edit-form" onSubmit={handleSubmit}>
        <div>
            <input className="edit-input" type="text" placeholder={currentFirstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <input className="edit-input" type="text" placeholder={currentLastName} onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <div>
            <button className="edit-button" type="submit">Save</button>
            <button className="edit-button" onClick={clear}>Cancel</button>
        </div>
    </form>
}