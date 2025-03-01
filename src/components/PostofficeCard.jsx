function PostofficeCard({ postoffice }) {
    return (
        <div className="postoffice_data">
            <p className="postoffice_name">
                Name: <span>{postoffice.Name}</span>
            </p>
            <p className="postoffice_branchType">
                Branch Type: <span>{postoffice.BranchType}</span>
            </p>
            <p className="postoffice_delivery">
                Delivery Status: <span>{postoffice.DeliveryStatus}</span>
            </p>
            <p className="postoffice_district">
                District: <span>{postoffice.District}</span>
            </p>
            <p className="postoffice_division">
                Division: <span>{postoffice.Division}</span>
            </p>
        </div>
    );
}

export default PostofficeCard;
