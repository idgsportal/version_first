import { Routes, Route, Navigate } from "react-router-dom";

// layouts
import AdminLayout from "../admin/layout/AdminLayout";

// pages
import LoginPage from "../auth/page/LoginPage";
import Dashboard from "../admin/pages/AdminDashboard";
import SuccessForms from "../admin/forms/dashboard/SuccessForms";
import PendingForms from "../admin/forms/dashboard/PendingForms";
import RejectedForms from "../admin/forms/dashboard/RejectedForms";
import RefundForms from "../admin/forms/dashboard/RefundForms";
import Distributor from "../admin/pages/DistributorManagement";
import CreateDistributor from "../admin/forms/distributor/CreateDistributor";
import DistributorWalletList from "../admin/forms/fund/DistributorWalletList"
// import Retailer from "../admin/pages/Retailer";
// import SubAdmin from "../admin/pages/SubAdmin";
import FundManagement from "../admin/pages/FundManagement";
// import Service from "../admin/pages/Service";


import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import AddFund from "../admin/forms/fund/AddFund";
import DeductFund from "../admin/forms/fund/DeductFund";
import RetailerWalletList from "../admin/forms/fund/RetailerWalletList";
import DistributorList from "../admin/forms/distributor/DistributorList";
import SubAdminWalletList from "../admin/forms/fund/SubAdminWalletList";
import RetailerManagement from "../admin/pages/RetailerManagement";
import CreateRetailer from "../admin/forms/retailer/CreateRetailer";
import RetailerList from "../admin/forms/retailer/RetailerList";
import SubAdminManagement from "../admin/pages/SubAdminManagement";
import CreateSubAdmin from "../admin/forms/subadmin/CreateSubAdmin";
import SubAdminList from "../admin/forms/subadmin/SubAdminList";
import ServicesManagement from "../admin/pages/ServiceManagement";



// Retailer Route Start Here
import RetailerLayout from "../retailer/layout/RetailerLayout"
import RetailerDashboard from "../retailer/pages/RetailerDashboard";
import RetailerWallet from "../retailer/pages/RetailerWallet";
import { MPEDistrict } from "../retailer/pages/MpeDistrict";








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
                <Route path="/admin/fund-management/distributor-list" element={<DistributorWalletList />} />
                <Route path="/admin/fund-management/subadmin-list" element={<SubAdminWalletList />} />
                <Route path="distributor" element={<Distributor />} />
                <Route path="/admin/distributors/create" element={<CreateDistributor />} />
                <Route path="/admin/distributors" element={<DistributorList />} />
                <Route path="/admin/retailer" element={<RetailerManagement />} />
                <Route path="/admin/retailer/create" element={<CreateRetailer />} />
                <Route path="/admin/retailers" element={<RetailerList />} />
                <Route path="/admin/sub-admin" element={<SubAdminManagement />} />
                <Route path="/admin/sub-admin/create" element={<CreateSubAdmin />} />
                <Route path="/admin/sub-admins" element={<SubAdminList />} />
                <Route path="/admin/services" element={<ServicesManagement />} />


            </Route>

            <Route
                path="/retailer"
                element={
                    <ProtectedRoute role="retailer">
                        <RetailerLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<RetailerDashboard />} />
                {/* <Route path="wallet" element={<RetailerWallet />} /> */}
                <Route path="/retailer/mpedistrict" element={<MPEDistrict />} />
                {/* <Route path="services" element={<Services />} />
                <Route path="profile" element={<Profile />} />
                <Route path="change-password" element={<ChangePassword />} /> */}
            </Route>



            {/* Default */}
            <Route path="*" element={<Navigate to="/login" />} />

        </Routes >

    );
};

export default AppRoutes;
