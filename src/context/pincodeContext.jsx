import { createContext, useReducer } from "react";
import { getPincodeDataApi } from "../services/pincodeApi";
const PincodeContext = createContext();

const initialState = {
    pincode: "",
    message: "",
    pincodeData: [],
    filteredData: [],
    status: "idle",
    errorMessage: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "pincode/dataReceived":
            return {
                ...state,
                pincodeData: action.payload.PostOffice,
                filteredData: action.payload.PostOffice,
                pincode: action.payload.pincode,
                message: action.payload.Message,
                status: "idle",
            };
        case "pincode/dataInProgress":
            return {
                ...state,
                status: "loading",
            };
        case "pincode/error":
            return {
                ...state,
                status: "error",
                errorMessage: action.payload,
            };
        case "pincode/filterName":
            return {
                ...state,
                filteredData: state.pincodeData.filter((data) =>
                    data.Name.toLowerCase().includes(
                        action.payload.toLowerCase()
                    )
                ),
            };
        default:
            throw new Error("Unknown Action");
    }
}

function PincodeProvider({ children }) {
    const [
        { pincode, message, errorMessage, filteredData, pincodeData, status },
        dispatch,
    ] = useReducer(reducer, initialState);

    async function getPincodeData(pincode) {
        try {
            dispatch({ type: "pincode/dataInProgress" });
            const { Status, Message, PostOffice } = await getPincodeDataApi(
                pincode
            );
            if (Status === "404" || Status === "Error")
                throw new Error(Message);

            dispatch({
                type: "pincode/dataReceived",
                payload: {
                    Message,
                    PostOffice,
                    pincode,
                },
            });
        } catch (err) {
            dispatch({ type: "pincode/error", payload: err.message });
        }
    }
    return (
        <PincodeContext.Provider
            value={{
                pincode,
                message,
                filteredData,
                pincodeData,
                status,
                errorMessage,
                getPincodeData,
                dispatch,
            }}
        >
            {children}
        </PincodeContext.Provider>
    );
}

export default PincodeProvider;
export { PincodeContext };
