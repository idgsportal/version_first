import axios from "../../Helper/axios";
import { User } from "lucide-react";
import { userConstant } from "./Constants";



export const createUser = (formData) => {
    return async (dispatch) => {
        dispatch({
            type: userConstant.CREATE_USER_REQUEST
        });

        // 1. FormData ka use karein kyunki isme files (images) hain
        const form = new FormData();

        // Text Data append karein
        form.append('shopName', formData.shopName);
        form.append('shopAddress', formData.shopAddress);
        form.append('pinCode', formData.shopPincode);
        form.append('name', formData.name);
        form.append('dob', formData.dob);
        form.append('mobile', formData.mobile);
        form.append('email', formData.email);
        form.append('aadharNo', formData.aadhaar);
        form.append('panNo', formData.pan);
        form.append('role', formData.role);
        form.append('password', formData.password);

        try {

            const res = await axios.post("/api/users/signup", form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 201) {
                dispatch({
                    type: userConstant.CREATE_USER_SUCCESS,
                    payload: {
                        message: res.data.message,
                        user: res.data.user
                    }
                });
                return true;
            } else {
                dispatch({
                    type: userConstant.CREATE_USER_FAILURE,
                    payload: { error: res.data.error || "Something went wrong" }
                });
                return false;
            }

        } catch (error) {
            dispatch({
                type: userConstant.CREATE_USER_FAILURE,
                payload: {
                    error: error.response?.data?.message || "Server Error"
                }
            });

            return false;
        }
    }
}

// export const getAllUsers = () => {
//     return async (dispatch) => {
//         dispatch({
//             type: userConstant.GET_USER_REQUEST
//         });

//         try {
//             const res = await axios.get("/api/distributors");

//             // बैकएंड से 'data' की-वर्ड के अंदर डेटा आ रहा है
//             const distributorsList = res.data.data;
//             console.log(distributorsList)

//             if (res.status === 200) {
//                 dispatch({
//                     type: userConstant.GET_USER_SUCCESS,
//                     payload: distributorsList // यहाँ पूरा Array भेजें
//                 });

//             }
//         } catch (error) {
//             dispatch({
//                 type: userConstant.GET_USER_FAILURE,
//                 payload: error.response ? error.response.data.message : error.message
//             });
//         }
//     };
// };



export const updateStatus = ({ userId, status }) => {
    return async (dispatch) => {
        dispatch({
            type: userConstant.UPDATE_STATUS_USER_REQUEST
        });

        try {

            const res = await axios.patch("/api/update-status", { userId, status });

            if (res.status === 200) {
                dispatch({
                    type: userConstant.UPDATE_STATUS_USER_SUCCESS,
                    payload: res.data
                });
                dispatch(getAllDistributers())
            }
        } catch (error) {
            const { data } = error.response;
            dispatch({
                type: userConstant.UPDATE_STATUS_USER_FAILURE,
                payload: { error: data.message || error.message }
            });
        }
    };
};