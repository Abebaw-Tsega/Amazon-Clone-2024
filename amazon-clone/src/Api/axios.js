import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-3770a/us-central1/api",
  baseURL: "https://amazone-deploy-1-2qv9.onrender.com",


});

export { axiosInstance };