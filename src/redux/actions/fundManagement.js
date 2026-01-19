import { fundManagement } from "./Constants"
import axios from "../../Helper/axios"

export const fetchUserData = (mobile) => {
    return async (dispatch) => {
        dispatch({ type: fundManagement.FETCH_USER_DATA_REQUEST });

        try {
            // Mobile ko object mein bhejna sahi hai
            const res = await axios.post("/api/admin/fetch-user", { mobile });

            if (res.status === 200) {
                dispatch({
                    type: fundManagement.FETCH_USER_DATA_SUCCESS,
                    payload: { user: res.data.user || res.data } // API response structure ke hisaab se
                });
            }
        } catch (error) {
            // Corrected error path for Axios
            const errorMsg = error.response ? error.response.data.error : error.message;
            dispatch({
                type: fundManagement.FETCH_USER_DATA_FAILURE,
                payload: { error: errorMsg }
            });
        }
    }
}

export const AddFundByAdmin = (userData, amount, remark) => {
    return async (dispatch) => {
        dispatch({
            type: fundManagement.ADD_FUND_BY_ADMIN_REQUEST
        });

        try {
            // ध्यान दें: 'users' की जगह 'userData' का उपयोग करें और ID निकालें
            const targetUserId = userData._id || userData.id;

            // Backend को ज़रूरी सारा डेटा भेजें (amount, remark आदि)
            const res = await axios.post("/api/admin/add-fund", {
                targetUserId,
                amount,
                remark,
                category: "admin_transfer"
            });

            if (res.status === 200) {
                dispatch({
                    type: fundManagement.ADD_FUND_BY_ADMIN_SUCCESS,
                    payload: res.data // इसमें success message और updated balance होगा
                });
            }
        } catch (error) {
            // Error path को सुरक्षित बनाएं ताकि ऐप क्रैश न हो
            const errorMessage = error.response?.data?.message || error.message || "Something went wrong";

            dispatch({
                type: fundManagement.ADD_FUND_BY_ADMIN_FAILURE,
                payload: errorMessage
            });
        }
    };
};

export const deductFundByAdmin = (userData, amount, remark) => {
    return async (dispatch) => {
        dispatch({
            type: fundManagement.DEDECT_FUND_BY_ADMIN_REQUEST
        })
        try {
            const targetUserId = userData._id || userData.id;
            const res = await axios.post("/api/admin/deduct-fund", {
                targetUserId,
                amount,
                remark,
                category: "admin_transfer"
            });
            if (res.status === 200) {
                dispatch({
                    type: fundManagement.DEDECT_FUND_BY_ADMIN_SUCCESS,
                    payload: res.data
                })
            }

        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Something went wrong";

            dispatch({
                type: fundManagement.DEDECT_FUND_BY_ADMIN_FAILURE,
                payload: errorMessage
            });
        }
    }
}

// export const fetchAllRetailerData = () => {
//     return async (dispatch) => {
//         dispatch({
//             type: fundManagement.GET_ALL_RETAILER_DATA_REQUEST
//         })
//         try {
//             const retailer = await axios.get("/api/admin/retailers-report");
//             if (retailer.status === 200) {
//                 dispatch({
//                     type: fundManagement.GET_ALL_RETAILER_DATA_SUCCESS,
//                     payload: retailer.data.data
//                 })
//             }
//         } catch (error) {
//             const errorMessage = error.response?.data?.message || error.message || "something went wrong";
//             dispatch({
//                 type: fundManagement.GET_ALL_RETAILER_DATA_FAILURE,
//                 payload: { error: errorMessage }
//             })
//         }
//     }
// }

// export const fetchAllDistributorsData = () => {
//     return async (dispatch) => {
//         dispatch({
//             type: fundManagement.GET_ALL_DISTRIBUTOR_DATA_REQUEST
//         })
//         try {
//             const retailer = await axios.get("/api/admin/distributors-report");
//             if (retailer.status === 200) {
//                 dispatch({
//                     type: fundManagement.GET_ALL_DISTRIBUTOR_DATA_SUCCESS,
//                     payload: retailer.data.data
//                 })
//             }
//         } catch (error) {
//             const errorMessage = error.response?.data?.message || error.message || "something went wrong";
//             dispatch({
//                 type: fundManagement.GET_ALL_DISTRIBUTOR_DATA_FAILURE,
//                 payload: { error: errorMessage }
//             })
//         }
//     }
// }

export const fetchAllRollSummary = () => {
    return async (dispatch) => {
        dispatch({
            type: fundManagement.FETCH_ALL_ROLES_SUMMARY_REQUEST
        });

        try {
            const res = await axios.get("/api/admin/all-wallets-summary");

            if (res.status === 200) {
                // Backend से जो 'data' ऑब्जेक्ट आ रहा है उसे निकालें
                const { retailer, distributor, subadmin, grandTotalBalance } = res.data.data;
                dispatch({
                    type: fundManagement.FETCH_ALL_ROLES_SUMMARY_SUCCESS,
                    payload: {
                        retailer,
                        distributor,
                        subadmin,
                        grandTotalBalance
                    }
                });
            }
        } catch (error) {
            dispatch({
                type: fundManagement.FETCH_ALL_ROLES_SUMMARY_FAILURE,
                payload: { error: error.response?.data?.message || error.message }
            });
        }
    }
}


