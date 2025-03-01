import PincodeProvider from "./context/pincodeContext";
import HomePage from "./components/HomePage";

function App() {
    return <PincodeProvider>{<HomePage />}</PincodeProvider>;
}

export default App;
