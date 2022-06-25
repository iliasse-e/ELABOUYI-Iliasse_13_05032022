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

/**
 * Http request to update user profile (firstname & lastname)
 * @param firstName 
 * @param lastName 
 * @param token 
 * @param endpoint 
 * @returns Promise (object of new firstname and lastname)
 */
export const fetchUpdateProfile = (firstName: string, lastName: string, token: string, endpoint: string = userEndpoint): Promise<ProfileType> => {
    return axios.put(
        endpoint,
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