import {useLocation, Navigate} from 'react-router-dom'
import React, { } from "react";
export const setToken = (token) => {

    localStorage.setItem('dakToken', token)
}
export const setUser = (username) => {

    localStorage.setItem('user', username)
}
export const setFullname = (fullname) => {

    localStorage.setItem('name', fullname)
}
export const fetchToken = (token) => {
    return localStorage.getItem('dakToken')
}
export const fetchUser = (user) =>
{
    return localStorage.getItem('username')
}

export function RequireToken({children}) {

    let auth = fetchToken()
    let user = fetchUser()
    let location = useLocation()
    if (!auth && !user) {
        return <Navigate to='/' state={{from: location}}/>
    }
    return children;
}