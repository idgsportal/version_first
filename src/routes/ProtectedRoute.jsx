import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role }) => {
    const { authenticate, user, authenticating } = useSelector((state) => state.auth);
    const location = useLocation(); // Current path save karne ke liye

    if (authenticating) return <div>Loading...</div>;

    if (!authenticate) {
        // 'state' mein hum current path bhej rahe hain
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (role && user?.role !== role) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute