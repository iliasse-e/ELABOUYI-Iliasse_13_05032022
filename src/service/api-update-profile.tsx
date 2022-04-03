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
 * Make the Http request to update user profile (firstname & lastname)
 * Token needed for authentification
 * @param firstName 
 * @param lastName 
 * @param token 
 * @param endpoint 
 * @returns Promise (object of new firstname and lastname)
 */
export const updatePost = (firstName: string, lastName: string, token: string, endpoint: string = userEndpoint): Promise<ProfileType> => {
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