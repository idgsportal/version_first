import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store, UserPlus, Eye, Upload } from "lucide-react";



export default function RetailerManagement() {
    const navigate = useNavigate();


    return (
        <div className="space-y-6 p-3">
            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                        <Store className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-gray-800">
                            Retailer Management
                        </h1>
                        <p className="text-sm text-gray-600">
                            Manage retailer accounts
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                    onClick={() => navigate("/admin/retailer/create")}
                    className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 hover:bg-white/70 transition-all cursor-pointer text-left"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                            <UserPlus className="w-7 h-7 text-green-600" />
                        </div>
                    </div>
                    <h3 className="text-gray-800">Create Retailer</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Add new retailer to the system
                    </p>
                </button>

                <button
                    onClick={() => navigate("/admin/retailers")}
                    className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 hover:bg-white/70 transition-all cursor-pointer text-left"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                            <Eye className="w-7 h-7 text-blue-600" />
                        </div>

                    </div>
                    <h3 className="text-gray-800">View Retailers</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        View and manage all retailers
                    </p>
                </button>
            </div>
        </div>
    );
}