import { useState } from "react";

function Signin() {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');

    function handleFetch(e){
        e.preventDefault()
        const requestSignin = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
             })
        };
        fetch('https://social-network-api.osc-fr1.scalingo.io/crypto-community/register', requestSignin)
            .then(response => (alert("sign in ok "), response.json()))
            .catch((error) => console.error("There was an error, no fetch given!", error));
    }


    return(
        <>
            <h2>SIGN IN</h2>
            <form onSubmit={(e)=> handleFetch(e)} method="POST">
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter Username" onInput={e => setEmail(e.target.value)}/>
                    <br />
                    <label>Firstname</label>
                    <input type="text" placeholder="Enter Username" onInput={e => setFirstname(e.target.value)}/>
                    <br />
                    <label>Lastname</label>
                    <input type="text" placeholder="Enter Username" onInput={e => setLastname(e.target.value)}/>
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" onInput={e => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </>
    )

}

export default Signin;