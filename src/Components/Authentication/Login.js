import React, { useState } from 'react'
import "../../Assets/Css/styles.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { API_BASE_URL } from "../../Config/config.js"
import { useNavigate } from 'react-router-dom';
import { setToken, setUser, setFullname } from '../../Services/Authentication.js'
import axios from 'axios';
import { SHA256 } from "crypto-js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            if (username.length === 0) {
                toast("username has left blank!")
            } else if (password.length === 0) {
                toast("password has left blank")
            } else {
                let encypted = SHA256(password).toString();
                const api = API_BASE_URL + "/api/login"
                const response = await axios.post(api, {
                    username: username,
                    password: encypted
                });

                if (response.data["message"] === "Invalid credentials") {
                    toast("Invalid Credentials, Try Again!")
                } else if (response.data.token) {
                    setToken(response.data.token)
                    toast("Hi " + username + " Welcome to MM Obit")
                    setTimeout(() => {
                        setUser(response.data.username);
                        setFullname(response.data.fullname)
                        navigate("/dashboard")
                    }, 1500);

                } else {
                    toast("Unknown error occurred.");
                }
            }
        }

        catch (error) {
            if (error.message === "Network Error") {
                // Handle network error
                toast("Network error. Please check your internal network connection and try again.");
                setTimeout(() => {
                    navigate("/Error")
                }, 2000);
            } else {
                console.error("An error occurred:", error);
                toast("An error occurred while logging in. Please try again later.");
            }
        }
    };
    return (
        <div className='login_background'>
            <ToastContainer />
            <div className='login_card'>
                <div className='logo_login'></div>
                <div className="input-group_login">
                    <input type="text" name="text" className="input-field" onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label">Username</label>
                </div>
                <div className="input-group_login">
                    <input type="password" name="text"  className="input-field" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label">Password</label>
                </div>
                <div className="input-group_login">

                    <button className="jellyBtn" onClick={handleSubmit}>
                        Lets Go..
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Login
