import { io } from "socket.io-client";
import { api } from "../urlConfig";

export const socket = io(api, {
    autoConnect: false, // 🔥 login ke baad hi connect hoga
    withCredentials: true
});
