import React, { useState } from "react";

const Login = (props) => {
    const [auth, setAuth] = useState({username: "", password: ""});
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setAuth({
            ...auth,
            [name]: value
        })
    }

    const login = () => {
        const {actions} = props;
        const {username, password} = auth;
        actions.getAuth(username, password);
    }

    if (props.auth) return null;

    return (
        <div className="login">
            <form>
                <label>
                    username 
                    <input name="username" type="input" onChange={handleInputChange} />
                </label>
                <label>
                    password
                    <input name="password" type="password" onChange={handleInputChange} />
                </label>
                <br/>
                <button type="button" disabled={!auth.username || !auth.password} onClick={login} >로그인</button>
            </form>
        </div>
    )
}

export default Login;