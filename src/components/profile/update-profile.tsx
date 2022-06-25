import React, { FormEvent, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../actions";
import { userStateType } from "../../reducers/user";
import { fetchUpdateProfile } from "../../service/api/api-update-profile";

interface UpdateProfilePropType {
  user : userStateType,
  onCancel : React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Renders form to update user profile
 * Uses optimistic UI rendering 
 * Called in profile page
 * @param user current user
 * @param onCancel : manipulates a hook from parent component
 * @returns form
 */
export const UpdateProfile: React.FC<UpdateProfilePropType> = ({ user, onCancel }) : JSX.Element => {

    const [currentFirstName, setFirstName] = useState(user.firstName);
    const [currentLastName, setLastName] = useState(user.lastName);
    const [errorMsg, setErrorMsg] = useState('');

    const accessToken = useSelector((state: RootStateOrAny) => state.auth.token);
    const userEmail = useSelector((state: RootStateOrAny) => state.user.email);
    const userId = useSelector((state: RootStateOrAny) => state.user.id);

    const dispatch = useDispatch();
    const previousFirstName = currentFirstName;
    const previousLastName = currentLastName;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // optimistic UI rendering => updates redux store before API call
        dispatch(
          updateProfileAction({
            firstName: currentFirstName, 
            lastName: currentLastName,
            email: userEmail, 
            id: userId})
        );
      
        onCancel(false);

        try {
          // API call to update profile
          fetchUpdateProfile(
            currentFirstName, 
            currentLastName, 
            accessToken
            );
        }

        catch (error) {
          // renders error msg
          setErrorMsg("We could not update your profile :" + error.response.data.message + ", please try again");

          // returns back the previous names in redux store
          dispatch(
            updateProfileAction({
              firstName: previousFirstName, 
              lastName: previousLastName,
              email: userEmail, 
              id: userId
            })
          );
        }
    }

    return <form className="edit-form" onSubmit={handleSubmit}>
        <div>
            <input className="edit-input"
              minLength={2}
              type="text"
              required
              placeholder={currentFirstName} 
              onChange={(e) => setFirstName(e.target.value)}>
            </input>

            <input className="edit-input"
              minLength={2} 
              type="text" 
              required 
              placeholder={currentLastName} 
              onChange={(e) => setLastName(e.target.value)}>
            </input>
        </div>
        <p className="error-msg" color="red">{errorMsg}</p>
        <div>
            <button className="edit-button" type="submit">Save</button>
            <button className="edit-button" onClick={() => onCancel(false)}>Cancel</button>
        </div>
    </form>
}