import { useState } from "react";
import { usePincode } from "../hooks/usePincode";

function Home() {
    const [pincode, setPincode] = useState("");
    const { status, errorMessage, dispatch, getPincodeData } = usePincode();
    function handleSubmit(e) {
        e.preventDefault();
        if (pincode.length < 6) {
            dispatch({
                type: "pincode/error",
                payload: "Pincode is not 6 digits. Please enter valid pincode!",
            });
            return;
        }
        getPincodeData(pincode);
    }

    return (
        <div>
            <h1 className="hero_heading">Enter Pincode</h1>
            <form action="" className="form" onSubmit={handleSubmit}>
                <input
                    className="input_search"
                    type="number"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                />
                <button
                    disabled={status === "loading"}
                    className="btn btn-lookup"
                    type="submit"
                >
                    {status === "loading" ? "Loading..." : "Lookup"}
                </button>
            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
}

export default Home;
