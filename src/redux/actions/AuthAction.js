import { authConstant } from "./Constants"
import axios from "../../Helper/axios"
import { toast } from "../../ui/toast/ToastHelper"



export const login = (user) => {
    return async (dispatch) => {
        dispatch({
            type: authConstant.LOGIN_REQUEST
        });

        try {
            const res = await axios.post(
                "/api/users/login",
                { ...user },
                { withCredentials: true }
            );

            if (res.status === 200) {
                const { user, message } = res.data;

                toast.success(message);

                dispatch({
                    type: authConstant.LOGIN_SUCCESS,
                    payload: { user }
                });
            }
        } catch (error) {
            const errorMsg =
                error.response?.data?.message ||
                "Login failed. Please check your credentials.";

            toast.error(errorMsg);

            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error: errorMsg }
            });
        }
    };
};

export const isUserLoggedIn = () => {
    return async (dispatch, getState) => {

        const { authChecked, authenticating } = getState().auth;
        console.log({ authChecked, authenticating })
        if (authChecked || authenticating) return;

        dispatch({ type: authConstant.LOGIN_REQUEST });

        try {
            const res = await axios.get("/api/users/me", { withCredentials: true });

            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: { user: res.data.user }
            });

        } catch (error) {

            // 🔴 server down / connection refused
            if (!error.response) {
                console.error("Backend not reachable");
            }

            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error: "Not authenticated" }
            });
        }
    };
};



export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstant.LOGOUT_REQUEST });

        try {

            const res = await axios.post("/api/users/logout")

            dispatch({
                type: authConstant.LOGOUT_SUCCESS
            });
            toast.success(res.data.message);

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