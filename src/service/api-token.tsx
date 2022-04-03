/**
 * @file Handles the API user profile call
 */
import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;
const userEndpoint = url + process.env.REACT_APP_API_PROFILE;

export interface UserType {
    data: { 
        body: {
            email: string,
            firstName: string,
            lastName: string,
            createdAt: string,
            updatedAt: string,
            id: string
        }
        message: string
    } 
};

/**
 * Sends token in order to get or update the profile
 * @param token 
 * @param endpoint 
 * @returns {UserType} information on user
 */
export const tokenPost = (token: string, endpoint: string = userEndpoint): Promise<UserType> => {
    return axios.post(
        endpoint,
        token,
        {
            headers: { 
            'Authorization': 'Bearer ' + token
        },
        }
    )
}
 