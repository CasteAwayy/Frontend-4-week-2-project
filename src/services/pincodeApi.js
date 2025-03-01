const URL = "https://api.postalpincode.in/pincode";

async function getPincodeDataApi(pincode) {
    const res = await fetch(`${URL}/${pincode}`);
    const [data] = await res.json();
    return data;
}

export { getPincodeDataApi };
