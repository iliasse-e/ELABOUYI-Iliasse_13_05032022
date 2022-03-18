/**
 * @file Handles the API user profile call (POST & PUT method)
 */
 import axios from "axios";
 import React from "react";
 
 const url = process.env.REACT_APP_SERVER_URL;
 const signUpEndpoint = url + process.env.REACT_APP_API_SIGNUP;

 interface SignUpType {
    email: String,
    password: String,
    firstName: String,
    lastName: String
  }

  interface SignUpReturnType {
    status: Number,
    message: String,
    body: {
      id: String,
      email: String
    }
  }

/**
 * Gathers informations to create new user
 * Variable has to be used for API call func called signUpPost
 * @param email 
 * @param password 
 * @param firstName 
 * @param lastName 
 * @returns 
 */
export const signUp = (email: String, password: String, firstName: String, lastName: String): SignUpType => {
    return {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }
}

/**
 * Makes the API call to create a new user profile
 * @param signUpData user information to create, use the variable signUp
 * @returns SignUp status response
 */
export const signUpPost = (signUpData: SignUpType): Promise<SignUpReturnType> => {
    return axios.post(
        signUpEndpoint,
        signUpData,
        {
           headers: {'Content-Type': 'application/json'}
        }
    )
}
 