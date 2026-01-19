import { authConstant } from "../actions/Constants";


const initState = {
    token: null,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        fullName: "",
        role: "" // रोल यहाँ भी रखें ताकि कंसिस्टेंसी बनी रहे
    },
    authenticating: false,
    authenticate: false,
    loading: false,
    error: null,
    message: ""
}

export default (state = initState, action) => {
    console.log("Action Type:", action.type);

    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true,
                loading: true,
                error: null,
                message: ""
            }
        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                loading: false,
                message: action.payload.message
            }
        case authConstant.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                authenticate: false,
                authenticating: false,
                loading: false,
            }
        case authConstant.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case authConstant.LOGOUT_SUCCESS:
            // पूरी तरह से स्टेट को इनिशियल वैल्यू पर वापस ले जाएँ
            return {
                ...initState
            }
        case authConstant.LOGOUT_FAILURE:
            return {
                ...state, // यहाँ पुरानी स्टेट रखें ताकि डेटा न उड़े
                error: action.payload.error,
                loading: false
            }

        default:
            return state;
    }
}