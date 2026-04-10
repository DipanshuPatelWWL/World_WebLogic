import axios from "axios";

// Create axios instance
const API = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Request Interceptor (for auth later)
API.interceptors.request.use(
    (config) => {
        // Example: attach token (future use)
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (clean error handling)
API.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error.response?.data?.message ||
            error.message ||
            "Something went wrong";

        return Promise.reject(new Error(message));
    }
);

export default API;