import { fundManagement } from "../actions/Constants"

const initState = {
    retailer: { users: [], count: 0, totalBalance: 0 },
    distributor: { users: [], count: 0, totalBalance: 0 },
    subadmin: { users: [], count: 0, totalBalance: 0 },
    grandTotalBalance: 0,
    loading: false,
    error: null,
    message: "",
}

export default (state = initState, action) => {
    switch (action.type) {
        case fundManagement.FETCH_USER_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case fundManagement.FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                error: null
            }
        case fundManagement.FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                user: initState.user
            }
        case fundManagement.FETCH_ALL_ROLES_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case fundManagement.FETCH_ALL_ROLES_SUMMARY_SUCCESS:
            // यहाँ payload से डेटा निकाल रहे हैं जो एक्शन से आ रहा है
            const { retailer, distributor, subadmin, grandTotalBalance } = action.payload;
            return {
                ...state,
                retailer: retailer,       // इसमें users और count दोनों होंगे
                distributor: distributor,
                subadmin: subadmin,
                grandTotalBalance: grandTotalBalance,
                loading: false,
                error: null
            }

        case fundManagement.FETCH_ALL_ROLES_SUMMARY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}