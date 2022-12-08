import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataUser } from "../features/userSlice"
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    async function handleFetch(e) {
        e.preventDefault()
        // login du User
        const requestLogin = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
             })
        };
        const responsefetch = await fetch('https://social-network-api.osc-fr1.scalingo.io/crypto-community/login', requestLogin)

        if (!responsefetch.ok) {
            const message = `An error has occured`;
            throw new Error(message);
        }
        const response = await responsefetch.json();
        console.log(response);
        const data = (sessionStorage.setItem('token userID', JSON.stringify(response.token)))
        console.log("token",response.token);


        // 2e fetch afin de lire les informations du token
        const requestUser = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${response.token}`
            },
        };
        const responseuser = await fetch('https://social-network-api.osc-fr1.scalingo.io/crypto-community/user', requestUser)
        if (!responseuser.ok){
            const message = "An error has occured";
            throw new Error(message);
        }
        const responseuserdata = await responseuser.json()
        console.log("response user", responseuserdata)

        dispatch(dataUser({
            email: responseuserdata.email,
            firstname: responseuserdata.firstname,
            lastname: responseuserdata.lastname,
        }))

        if (sessionStorage.getItem('token userID') == JSON.stringify(response.token)) {
            navigate("/wallet")
            const message= "token unauthorized";
            console.log(message);
        }
    }

    return(
        <>
            <h2>LOGIN</h2>
            <form onSubmit={(e)=> handleFetch(e)} method="POST">
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter Username" onInput={e => setEmail(e.target.value)}/>
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" onInput={e => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )

}

export default Login;