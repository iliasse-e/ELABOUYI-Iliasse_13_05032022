/**
 * @file Handles the API login call
 */
import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;
const loginEndpoint = url + process.env.REACT_APP_API_LOGIN;

interface getUserType {
    email: string,
    password: string
}

export interface LoginResponse {
    data: {
        body: {
            token: string
        },
        message: string
    }
}

/**
 * Gets what the user wrote into the Sign-In input to send it to the back end API (body)
 * @param userEmail user input's email
 * @param userPassword user input's password
 * @returns the user's identification input
 */
export const getUserInput = (userEmail: string, userPassword: string): getUserType => {
    return {
        email: userEmail,
        password: userPassword
    }
}

/**
 * HTTP request to log the user in
 * @param email 
 * @param password 
 * @param endpoint Api endpoint for request
 * @returns Promise of object (token, message)
 */
export const loginPost = async (email: string, password: string, endpoint = loginEndpoint): Promise<LoginResponse> => {
    console.log("post : " + JSON.stringify(getUserInput(email, password)));
    return axios.post(
        endpoint, 
        getUserInput(email, password),
        {
            headers: {'Content-Type': 'application/json'},
        }
        )
}