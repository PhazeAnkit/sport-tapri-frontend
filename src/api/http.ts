import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, 
});

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
