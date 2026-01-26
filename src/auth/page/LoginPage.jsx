import React, { useEffect } from 'react'
import LoginLayout from '../layout/LoginLayout'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


function LoginPage() {
    const { authenticate, user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (authenticate && user?.role) {

            const redirectPath = location.state?.from?.pathname;

            if (redirectPath) {
                navigate(redirectPath, { replace: true });
            } else {
                // 2. Agar koi purana path nahi hai, toh role-wise default par bhejein
                switch (user.role) {
                    case 'admin': navigate("/admin"); break;
                    case 'distributor': navigate("/distributor/dashboard"); break;
                    case 'retailer': navigate("/retailer"); break;
                    default: navigate("/");
                }
            }
        }
    }, [authenticate, user, navigate, location]);
    return (

        <LoginLayout />

    )


}

export default LoginPage