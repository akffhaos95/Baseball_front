import React from "react";
import { authService } from "fbase";
import { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value)
        }
        console.log(event.target.name);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            } else {
                data = await authService.sighInWithEmailAndPassword(
                    email, password
                )
            }
            console.log(data)
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
                {error && <span>{error}</span>}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "로그인" : "회원가입"}
            </span>
        </>
    )
}

export default AuthForm;