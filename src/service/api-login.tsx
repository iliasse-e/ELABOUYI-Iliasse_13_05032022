/**
 * @file Handles the API login call (POST method)
 */
import axios from "axios";
import React from "react";

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


export const loginPost = async (email: string, password: string): Promise<LoginResponse> => {
    console.log("post : " + JSON.stringify(getUserInput(email, password)));
    return axios.post(
        loginEndpoint, 
        getUserInput(email, password),
        {
            headers: {'Content-Type': 'application/json'},
        }
        )
}