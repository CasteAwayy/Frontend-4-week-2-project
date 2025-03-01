import { useContext } from "react";
import { PincodeContext } from "../context/pincodeContext";

function usePincode() {
    const context = useContext(PincodeContext);
    if (context === undefined)
        throw new Error("PincodeContext is used outside the pincode provider");
    return context;
}

export { usePincode };
