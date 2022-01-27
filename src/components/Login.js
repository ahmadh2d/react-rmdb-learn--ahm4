import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiSettings from "../API";

import { Context } from "../context";
// Components
import Button from "./Button/Button";
//Styles
import { Wrapper } from "./Login.styles";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    
    const [_user, setUser] = useContext(Context);

    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await apiSettings.getRequestToken();
            const sessionId = await apiSettings.authenticate(requestToken, username, password);

            console.log(sessionId);
            setUser({sessionId: sessionId.session_id, username});

            navigate('/');

        } catch (error) {
            setError(true);
        }
    };

    return (
        <Wrapper>
            {error && <div className="error">There was an error!</div>}
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleInput}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleInput}
            />
            <Button text="Login" callback={handleSubmit} />
        </Wrapper>
    );
};

export default Login;
