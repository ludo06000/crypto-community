import { useState, useEffect } from "react";

function PublishShow() {

    const [arrayPosts, setArrayPosts] = useState([])

    useEffect(() =>{
        GetPosts()
    }, []);

    useEffect(() => {
        console.log("ARRAYYYYYY",arrayPosts)
    }, [arrayPosts])

    async function GetPosts() {


        const Getpublish = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const responsePost = await fetch('https://social-network-api.osc-fr1.scalingo.io/crypto-community/posts', Getpublish)
        if (!responsePost.ok){
            const message = "An error has occured";
            throw new Error(message);
        }
        const responsePostData = await responsePost.json()
        setArrayPosts(responsePostData.posts)
    }

    function formatDate(date) {
            //2022-12-08T13:51:49.895Z
            let year = date.substring(0, 4);
            let month = date.substring(5, 7);
            let day = date.substring(8, 10);
            let hour = date.substring(11, 13);
            let minute = date.substring(14, 16);
            let second = date.substring(17, 19);
            return day + "-" + month + "-" + year + " " + hour + ":" + minute + ":" + second;
    }

    return (
        <>
            <ul>{arrayPosts.map((element, index) =>
                <li key={index}> title: {element.title} <br/>
                                 firstname: {element.firstname} <br />
                                 lastname: {element.lastname} <br />
                                 content: {element.content} <br/>
                                 date: {formatDate(element.date)}
                                 <hr />
                </li>
                )}
            </ul>

        </>

    )
}

export default PublishShow;