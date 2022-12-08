function Payment({setCb,setExpirationdate,setCryptogramme}) {

    function handleSubmit(e) {
        e.preventDefault();
        setCb(e.target.cb.value);
        setExpirationdate(e.target.expirationDate.value);
        setCryptogramme(e.target.cryptogramme.value);
      }

    return(
        <>
            <hr />
            <h2>Payment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>N° CB</label>
                    <input type="text" id="cb" placeholder="Enter N° CB"/>
                    <br />
                    <label>Expiration Date</label>
                    <input type="text" id="expirationDate" placeholder="Enter expiration date"/>
                    <br />
                    <label>Cryptogramme</label>
                    <input type="text" id="cryptogramme" placeholder="Enter cryptogramme"/>
                    <br />
                    <button type="submit">Validate</button>
                </div>
            </form>
        </>
    )

}

export default Payment;