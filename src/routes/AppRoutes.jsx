import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import AdminLayout from "../admin/layout/Layout";

// pages
import LoginPage from "../auth/page/LoginPage";
import Dashboard from "../admin/pages/Dashboard";
import SuccessForms from "../admin/forms/SuccessForms";
import PendingForms from "../admin/forms/PendingForms";
import RejectedForms from "../admin/forms/RejectedForms";
import RefundForms from "../admin/forms/RefundForms";
// import Distributor from "../admin/pages/Distributor";
// import Retailer from "../admin/pages/Retailer";
// import SubAdmin from "../admin/pages/SubAdmin";
import FundManagement from "../admin/pages/FundManagement";
// import Service from "../admin/pages/Service";


import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import AddFund from "../admin/forms/fund/AddFund";
import DeductFund from "../admin/forms/fund/DeductFund";
import RetailerWalletList from "../admin/forms/fund/RetailerWalletList";


const AppRoutes = () => {
    const auth = useSelector(state => state.auth)
    return (

        <Routes>

            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute role="admin"> <AdminLayout /></ProtectedRoute>} >
                <Route index element={<Dashboard />} />
                <Route path="forms/success" element={<SuccessForms />} />
                <Route path="forms/pending" element={<PendingForms />} />
                <Route path="forms/rejected" element={<RejectedForms />} />
                <Route path="forms/refund" element={<RefundForms />} />
                <Route path="fund-management" element={<FundManagement />} />
                <Route path="/admin/fund-management/add" element={<AddFund />} />
                <Route path="/admin/fund-management/deduct" element={<DeductFund />} />
                <Route path="/admin/fund-management/retailer-list" element={<RetailerWalletList />} />
                {/* <Route path="distributor" element={<Distributor />} />
                    <Route path="retailer" element={<Retailer />} />
                    <Route path="sub-admin" element={<SubAdmin />} /> */}
                {/* <Route path="service" element={<Service />} /> */}
            </Route>

            {/* Default */}
            <Route path="*" element={<Navigate to="/login" />} />

        </Routes>

    );
};

export default AppRoutes;
