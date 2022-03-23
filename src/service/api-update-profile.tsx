/**
 * @file Handles the API user profile modification
 */
 import axios from "axios";
 
interface ProfileType {
    firstName: string,
    lastName: string,
};

const url = process.env.REACT_APP_SERVER_URL;
const userEndpoint = url + process.env.REACT_APP_API_PROFILE;


export const updatePost = (firstName: string, lastName: string, token: string): Promise<ProfileType> => {
    return axios.put(
        userEndpoint,
        {
        firstName: firstName,
        lastName: lastName
        },
        {
            headers: { 
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        }
    )
}