import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">Login</button>

            </form>
        </div>
    );
};

export default Login;