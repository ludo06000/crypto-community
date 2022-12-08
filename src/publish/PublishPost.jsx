import { useState } from "react"

const PublishPost = () => {

    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const token = JSON.parse(sessionStorage.getItem('token userID'))


    const handleSubmit = (event) => {
        event.preventDefault();

        const requestCrypto = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        }
        fetch('https://social-network-api.osc-fr1.scalingo.io/crypto-community/post', requestCrypto)
            .then(response => response.json()
            )
            .catch((error) => console.error("There was an error, no fetch given!", error)
            );
    }

    return (
        <>
            <h3>Post content</h3>
            <form onSubmit={(e) => handleSubmit(e)} method="POST">
                <div>
                    <label>Title :</label>
                    <input onInput={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Content : </label>
                    <input onInput={e => setContent(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Crypt'In!</button>
                </div>
            </form>
        </>
    )

}

export default PublishPost
