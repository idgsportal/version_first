import React from 'react'
import { Eye } from "lucide-react";
import { useNavigate } from 'react-router-dom';
function RetailerList() {
    const navigate = useNavigate()
    const dummyRetailers = [
        {
            id: 1,
            profilePhoto:
                "https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563EB&color=fff",
            name: "Rahul Sharma",
            shopName: "Sharma Electronics",
            mobile: "9876543210",
            email: "rahul@sharma.com",
            walletBalance: 5420,
            status: "Active",
        },
        {
            id: 2,
            profilePhoto:
                "https://ui-avatars.com/api/?name=Priya+Verma&background=7C3AED&color=fff",
            name: "Priya Verma",
            shopName: "Verma Services",
            mobile: "9876543211",
            email: "priya@verma.com",
            walletBalance: 8900,
            status: "Active",
        },
        {
            id: 3,
            profilePhoto:
                "https://ui-avatars.com/api/?name=Amit+Patel&background=059669&color=fff",
            name: "Amit Patel",
            shopName: "Patel Digital Hub",
            mobile: "9876543212",
            email: "amit@patel.com",
            walletBalance: 12300,
            status: "Blocked",
        },
    ];
    return (
        <div className="space-y-6 p-3">
            {/* Header */}
            <div className=" backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        ←
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                            <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-800">
                                View Retailers
                            </h2>
                            <p className="text-sm text-gray-600">
                                Manage all retailers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Sr No
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Profile
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Retailer Name
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Shop Name
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Mobile
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Email
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Wallet Balance
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyRetailers.map((retailer, index) => (
                                <tr
                                    key={retailer.id}
                                    className="border-b border-white/20 hover:bg-white/40 transition-all"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={retailer.profilePhoto}
                                            alt={retailer.name}
                                            className="w-10 h-10 rounded-[12px]"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {retailer.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {retailer.shopName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {retailer.mobile}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {retailer.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-700">
                                        ₹{retailer.walletBalance}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-[12px] text-xs ${retailer.status === "Active"
                                                ? "bg-green-400/20 border border-green-300/40 text-green-700"
                                                : "bg-red-400/20 border border-red-300/40 text-red-700"
                                                }`}
                                        >
                                            {retailer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select className="px-3 py-1.5 rounded-[12px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-sm text-gray-700 focus:outline-none">
                                            <option>Block</option>
                                            <option>Active</option>
                                            <option>Update Profile</option>
                                            <option>Change Password</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


}

export default RetailerList
