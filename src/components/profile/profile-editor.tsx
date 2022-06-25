import React from 'react'

export const ProfileEditor = ({firstName, lastName, onClick}) => {
    return <>
    <h1>Welcome back<br />{firstName + " " + lastName} !</h1>
    <button className="edit-button" onClick={() => onClick(true)}>Edit Name</button>
  </>
}