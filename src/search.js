import { useState } from "react";
import { data } from "./data";


export const Search = () => {
    const [code, setCode] = useState("");
    const [toggleForm, setToggleForm] = useState(false);

    const displayCode = () => {
        setToggleForm(!toggleForm)
        if (code) {
            console.log(code.trim())
        }
    }

    const changeInput = (e) => {
        setCode(e.target.value)
    }

    return (
        <>
            {
                ! toggleForm ? 
                (
                <form className="container">
                    <h5>Enter Pincode</h5>
                    <input onChange={changeInput} value={code} placeholder="Pincode" />
                    <button onClick={displayCode}>Lookup</button>
                </form>    ): (
                    <div className="home-container">
                        <div>
                            <h4>Pincode: {code}</h4>
                            <p><b>Message:</b> Number of pincode found:</p>
                            <input placeholder="Filter" />
                        </div>
                        <div className="card-container">
                            <div className="card">
                                <p>Name {data.name}</p>
                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )

}