import React, { useState } from "react";
import './sp.css'
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (!isPasswordValid(newPassword)) {
            setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.');
        } 
        else 
        {
            setPasswordError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isPasswordValid(password)) {
            navigate("/learn");
        } 
        else 
        {
            setPasswordError('Password is not valid. Please check the requirements.');
        }
    };

    const isPasswordValid = (password) => {
        // Regular expression to enforce password criteria
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    return (
        <>
            <h1>Sign in</h1>
            <div id="forms">
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Username: <input type="text" name="username" required /> </td>
                        </tr>
                        <tr>
                            <td>Password: <input type="password" name="password" value={password} onChange={handlePasswordChange} required /> </td>
                        </tr>
                        <tr>
                            <td>{passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}</td>
                        </tr>
                        <tr>
                            <td><a href="/"><div className="buttons">Back</div></a></td>
                            <td><input type="submit" className="buttons" disabled={!isPasswordValid(password)} /></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    );
}