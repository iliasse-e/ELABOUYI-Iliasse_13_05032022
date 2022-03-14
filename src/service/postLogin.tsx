import axios from "axios";
import React from "react";

const url = process.env.REACT_APP_URL;
const loginEndpoint = url + process.env.REACT_APP_LOGIN;

/**
 * Gets what the user wrote into the sign in input to send it to the back end API (body)
 * @param userEmail user input's email
 * @param userPassword user input's password
 * @returns the user's identification input
 */
const getUserInput = (userEmail: String, userPassword: String) => {
    return {
        email: userEmail,
        password: userPassword
        }
}

export interface LoginResponse {
    data: {
        body: {
            token: String
        },
        message: String
    }
}

export const loginPost = async (email: String, password: String): Promise<LoginResponse> => {
    console.log("post : " + JSON.stringify(getUserInput(email, password)));
    return axios.post(
        loginEndpoint, 
        getUserInput(email, password),
        {
            headers: {'Content-Type': 'application/json'},
        }
        )
}