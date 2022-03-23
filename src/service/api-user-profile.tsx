/**
 * @file Handles the API user profile call
 */
import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;
const userEndpoint = url + process.env.REACT_APP_API_PROFILE;

interface UserType {
    firstName: string,
    lastName: string,
    email: string,
    id: string
};


export const tokenPost = (token: string): Promise<UserType> => {
    return axios.post(
        userEndpoint,
        token,
        {
            headers: { 
            'Authorization': 'Bearer ' + token
        },
        }
    )
}
 