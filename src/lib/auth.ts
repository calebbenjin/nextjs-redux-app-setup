import axios from "axios";

// Function to fetch the token from the API route and use it in RTQ  to fetch Authorization headers
const fetchToken = async () => {
  const data = await axios.get("/api/me");
  return data;
};
export default fetchToken;
