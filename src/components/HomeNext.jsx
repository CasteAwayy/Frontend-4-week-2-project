import { useEffect, useState } from "react";
import { usePincode } from "../hooks/usePincode";
import PostofficeContainer from "./PostofficeContainer";

function HomeNext() {
    const [name, setName] = useState("");
    const { pincode, message, filteredData, dispatch } = usePincode();
    useEffect(() => {
        dispatch({ type: "pincode/filterName", payload: name });
    }, [name, dispatch]);
    return (
        <>
            <div>
                <h1 className="pincode">Pincode: {pincode}</h1>
                <p className="result">
                    <span className="message">Message:</span> {message}
                </p>
                <div className="filter">
                    <img src="search.svg" alt="search_icon" />
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input_filter"
                        type="text"
                        placeholder="Filter"
                    />
                </div>
            </div>
            {filteredData && <PostofficeContainer />}
        </>
    );
}

export default HomeNext;
