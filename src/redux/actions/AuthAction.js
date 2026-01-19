import { authConstant } from "./Constants"
import axios from "../../Helper/axios"
import { jwtDecode } from "jwt-decode"
import { toast } from "../../ui/toast/ToastHelper"



export const login = (user) => {
    return async (dispatch) => {
        dispatch({
            type: authConstant.LOGIN_REQUEST
        })

        try {
            const res = await axios.post("/api/users/login", { ...user });

            if (res.status === 200) {
                const { token, user, message } = res.data;
                toast.success(message);
                localStorage.setItem('token', token);
                // localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstant.LOGIN_SUCCESS,
                    payload: { token, user, message }
                })
            }
        } catch (error) {
            // Error Message nikalna (Backend se ya fallback message)
            const errorMsg = error.response?.data?.message || "Login failed. Please check your credentials.";

            toast.error(errorMsg);
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error: errorMsg }
            });
        }
    }
}

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                // अगर टोकन एक्सपायर हो गया है
                if (decodedToken.exp < currentTime) {
                    localStorage.clear();
                    dispatch({
                        type: authConstant.LOGIN_FAILURE,
                        payload: { error: "Session Expired. Please login again." }
                    });
                } else {
                    // टोकन अभी वैलिड है
                    const user = {
                        id: decodedToken.id,
                        role: decodedToken.role,
                        email: decodedToken.email
                    };

                    dispatch({
                        type: authConstant.LOGIN_SUCCESS,
                        payload: { token, user }
                    });
                }
            } catch (error) {
                localStorage.clear();
                console.log("Invalid Token");
            }
        }
    };
};

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstant.LOGOUT_REQUEST });

        try {
            // 1. LocalStorage को पूरी तरह साफ़ करें
            localStorage.clear();

            // 2. Redux State को अपडेट करें
            dispatch({
                type: authConstant.LOGOUT_SUCCESS
            });
            toast.success("LogOut Success");

            // नोट: अगर बैकएंड पर सेशन खत्म करने की API है, तो उसे यहाँ कॉल करें
            // await axios.post('/admin/signout');

        } catch (error) {
            dispatch({
                type: authConstant.LOGOUT_FAILURE,
                payload: { error: "Logout failed" }
            });
        }
    };
};