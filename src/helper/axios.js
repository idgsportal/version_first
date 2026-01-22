import axios from "axios";
import { api } from "../urlConfig";

const axiosInstance = axios.create({
    baseURL: api,
    withCredentials: true // 🍪 cookies automatically send hongi
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;
        const url = error.config?.url || "";

        // ❌ /me auth-check par kuch bhi mat karo
        if (status === 401 && url.includes("/api/users/me")) {
            return Promise.reject(error);
        }

        // ✅ baaki protected APIs ke liye logout + redirect
        if (status === 401 && !error.config._logoutTriggered) {
            error.config._logoutTriggered = true;

            try {
                await axios.post(
                    "http://localhost:2000/api/users/logout",
                    {},
                    { withCredentials: true }
                );
            } catch (_) {
                // ignore
            } finally {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
