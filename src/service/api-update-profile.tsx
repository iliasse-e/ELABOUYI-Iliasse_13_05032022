/**
 * @file Handles the API user profile call (PUT method)
 */
 import axios from "axios";
 import React from "react";
 
interface ProfileType {
    firstName: String,
    lastName: String,
};

const url = process.env.REACT_APP_SERVER_URL;
const userEndpoint = url + process.env.REACT_APP_API_PROFILE;


export const updatePost = (firstName: String, lastName: String, token: String): Promise<ProfileType> => {
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