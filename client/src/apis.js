import axios from "axios";

export default axios.create({
  baseURL: "https://server-for-cone-app.onrender.com/api/v1/coords",
});
