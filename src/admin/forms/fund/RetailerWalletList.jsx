import React from 'react';
import { ArrowLeft, Store } from 'lucide-react';
import { useSelector } from "react-redux";

export default function RetailerWalletList({ onBack }) {

    const fundData = useSelector(state => state.fundManagement?.retailer || {});
    const {
        users = [],
        totalBalance = 0,
        loading = false
    } = fundData;

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onBack}
                            className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center border border-blue-200/30">
                                <Store className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-gray-800 font-semibold text-lg">
                                    Retailer Wallet Balance
                                </h2>
                                <p className="text-sm text-gray-600">
                                    View all retailer wallet balances
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-2.5 rounded-[16px] backdrop-blur-[20px] bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-300/40">
                        <span className="text-green-700 font-bold">
                            Total: ₹{totalBalance.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Profile</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Retailer Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Shop Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Mobile</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Wallet Amount</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-white/20">
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="p-10 text-center text-gray-500">
                                        Loading data...
                                    </td>
                                </tr>
                            ) : (
                                users.map((item, index) => (
                                    <tr
                                        key={item._id || index}
                                        className="hover:bg-white/40 transition-all group"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                                            {index + 1}
                                        </td>

                                        <td className="px-6 py-4">
                                            <img
                                                src={
                                                    item.profilePhoto ||
                                                    `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=7C3AED&color=fff`
                                                }
                                                alt={item.name}
                                                className="w-10 h-10 rounded-[12px] border border-white/60 object-cover shadow-sm group-hover:scale-105 transition-transform"
                                            />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {item.shopName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {item.mobile}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-green-700">
                                            ₹{(item.wallet?.balance ?? item.balance ?? 0).toLocaleString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {!loading && users.length === 0 && (
                    <div className="p-10 text-center text-gray-500 italic">
                        No retailer records found.
                    </div>
                )}
            </div>
        </div>
    );
}
