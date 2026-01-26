import { authConstant } from "../actions/Constants";

const initState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        fullName: "",
        role: ""
    },

    authenticate: false,

    // 🔹 separation of concerns
    authenticating: false,   // silent auth check
    loading: false,          // login button spinner

    authChecked: false,

    error: null,
    message: ""
};

export default (state = initState, action) => {
    switch (action.type) {

        // 🔹 USER CLICKED LOGIN
        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                message: ""
            };

        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                authenticate: true,
                loading: false,
                authenticating: false,
                authChecked: true,
                error: null,
                message: action.payload.message || ""
            };

        case authConstant.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                authenticate: false,
                error: action.payload.error
            };

        // 🔹 SILENT SESSION CHECK
        case authConstant.AUTH_CHECK_START:
            return {
                ...state,
                authenticating: true
            };

        case authConstant.AUTH_CHECK_END:
            return {
                ...state,
                authenticating: false,
                authChecked: true
            };

        // 🔹 LOGOUT
        case authConstant.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case authConstant.LOGOUT_SUCCESS:
            return {
                ...initState
            };

        case authConstant.LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
};
