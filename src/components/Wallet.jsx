import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PublishPost from "../publish/PublishPost";
import Paymentform from "./Paymentform";

function wallet() {
    const navigate = useNavigate();

    const [cb, setCb] = useState("");
    const [expirationdate, setExpirationdate] = useState("");
    const [cryptogramme, setCryptogramme] = useState("");


    useEffect(() => {
        if (!sessionStorage.getItem('token userID')) {
            navigate("/")
        }
        else {
        const message= "token authorized";
        console.log(message);
        }
    }, []);

    return(
        <>
            <h2> Bienvenue sur ton wallet</h2>
            <hr />
            <PublishPost />
            <hr />
            <h3>CB INFOS : </h3>
            <p>N° CB : {cb}</p>
            <p>Expiration Date: {expirationdate}</p>
            <p>Cryptogramme : {cryptogramme}</p>
            <Paymentform  setCb={setCb} setExpirationdate={setExpirationdate} setCryptogramme={setCryptogramme} />
        </>
    )
}

export default wallet;