import { authConstant } from "../actions/Constants";

const initState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        fullName: "",
        role: ""
    },
    authenticating: false,
    authenticate: false,
    loading: false,
    error: null,
    message: "",
    authChecked: false
};

export default (state = initState, action) => {
    switch (action.type) {

        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true,
                loading: true,
                error: null,
                message: "",
                authChecked: true
            };

        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                authenticate: true,
                authenticating: false,
                loading: false,
                error: null,
                message: action.payload.message || "",
                authChecked: true
            };

        case authConstant.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                authenticate: false,
                authenticating: false,
                loading: false,
                authChecked: true,
            };

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
                error: action.payload.error,
                loading: false
            };

        default:
            return state;
    }
};
