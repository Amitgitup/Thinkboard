import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5001/api", // <-- should point to backend, not frontend
});
export default api;