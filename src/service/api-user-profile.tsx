/**
 * @file Handles the API user profile call (POST method)
 */
import axios from "axios";
import React from "react";

const url = process.env.REACT_APP_SERVER_URL;
const userEndpoint = url + process.env.REACT_APP_API_PROFILE;

interface UserType {
    firstName: String,
    lastName: String,
    email: String,
    id: String
};


export const tokenPost = (token: String): Promise<UserType> => {
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
 