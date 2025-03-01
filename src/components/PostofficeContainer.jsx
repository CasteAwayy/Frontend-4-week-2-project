import { usePincode } from "../hooks/usePincode";
import PostofficeCard from "./PostofficeCard";

function PostofficeContainer() {
    const { filteredData } = usePincode();
    return (
        <div className="postoffice_container">
            {filteredData?.length ? (
                filteredData.map((postoffice, idx) => (
                    <PostofficeCard key={idx} postoffice={postoffice} />
                ))
            ) : (
                <p className="error">
                    Couldn't find the postal data you're looking for…
                </p>
            )}
        </div>
    );
}

export default PostofficeContainer;
