import { userConstant } from "../actions/Constants";



const initialState = {
    users: [],
    loading: false,
    error: null,
    message: ""
};

export const createUserReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case userConstant.CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };

        case userConstant.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                // नए डिस्ट्रीब्यूटर को लिस्ट में सबसे ऊपर जोड़ना
                users: [action.payload.user, ...state.users],
                message: action.payload.message
            };

        case userConstant.CREATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case userConstant.GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case userConstant.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.users,
                error: null
            };

        case userConstant.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
};