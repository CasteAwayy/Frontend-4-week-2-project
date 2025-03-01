import { usePincode } from "../hooks/usePincode";
import Home from "./Home";
import HomeNext from "./HomeNext";

function HomePage() {
    const { pincodeData } = usePincode();
    return pincodeData?.length ? <HomeNext /> : <Home />;
}

export default HomePage;
