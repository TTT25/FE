import React,{ useEffect,useState} from 'react';
import {AuthService} from "../../services/services";

export default function SignIn() {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [error, setError] = useState({});

    function validate() {
        let isError = false;

        if (username === "") {
            setError((prevError) => ({
                ...prevError,
                username: "Username is required.",
            }));
            isError = true;
        }
        if (username !== "") {
            setError((prevError) => ({
                ...prevError,
                username: "",
            }));
        }
        if (password === "") {
            setError((prevError) => ({
                ...prevError,
                password: "Password is required.",
            }));
            isError = true;
        }
        if (password !== "") {
            setError((prevError) => ({
                ...prevError,
                password: "",
            }));
        }

        return isError;
    }

    const login = () => {
        if (!validate()) {
            AuthService.login(username, password, true).then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("username", username);
                    localStorage.setItem("data", JSON.stringify(response.data));
                    window.location = window.location.origin;
                } else {
                    setError((prevError) => ({
                        ...prevError,
                        username: response.data,
                    }));
                }
            });
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            login();
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login Page </h1>
                <div className="col-sm-6">
                    <input type="text" placeholder="UserName" className= "from-control" onChange={(e)=>setusername(e.target.value)}/>
                    {/* <input type="text" placeholder="username" className= "from-control"  onChange={this.handleChange}/> */}
                    <br />
                    <input type="password" placeholder="Password" className= "from-control" onChange={(e)=>setpassword(e.target.value)}/>
                    {/* <input type="password" placeholder="pass" className= "from-control" onChange={this.handleChange1}/> */}
                    <br />
                    <button onClick={login} onKeyPressCapture={handleKeyPress} className="btn btn-primary">Login</button>
                    {/* <button onClick={this.handleSubmit} className="btn btn-primary">Login</button> */}
                </div>
            </header>
        </div>
    );
}