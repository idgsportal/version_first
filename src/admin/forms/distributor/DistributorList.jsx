import React from 'react';
import { Eye } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../../../redux/actions/createUserAction';
import { useNavigate } from 'react-router-dom';

export default function DistributorList({ onBack }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const distributorState = useSelector(
        state => state.fundManagement.distributor.users || []
    );

    return (
        <div className="space-y-6 p-4">
            {/* HEADER */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate("/admin/distributor")}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        ←
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                            <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-800">View Distributors</h2>
                            <p className="text-sm text-gray-600">
                                Manage all distributors
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TABLE */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Sr No</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Profile</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Mobile</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Email</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Wallet Balance</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {distributorState.map((dist, index) => (
                                <tr
                                    key={dist._id}
                                    className="border-b border-white/20 hover:bg-white/40 transition-all"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-4">
                                        <img
                                            src={
                                                dist.profilePhoto?.url ||
                                                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                    dist.name
                                                )}&background=7C3AED&color=fff`
                                            }
                                            alt={dist.name}
                                            className="w-10 h-10 rounded-[12px]"
                                        />
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {dist.name}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {dist.mobile}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {dist.email}
                                    </td>

                                    <td className="px-6 py-4 text-sm text-green-700">
                                        {dist.balance}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-[12px] text-xs ${dist.status === 'active'
                                                ? 'bg-green-400/20 border border-green-300/40 text-green-700'
                                                : 'bg-red-400/20 border border-red-300/40 text-red-700'
                                                }`}
                                        >
                                            {dist.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <select
                                            value={dist.status}
                                            onChange={(e) => {
                                                const newStatus = e.target.value;

                                                if (
                                                    newStatus === 'active' ||
                                                    newStatus === 'blocked'
                                                ) {
                                                    if (
                                                        window.confirm(
                                                            `Kya aap distributor ko ${newStatus} karna chahte hain?`
                                                        )
                                                    ) {
                                                        dispatch(
                                                            updateStatus({
                                                                userId: dist._id,
                                                                status: newStatus
                                                            })
                                                        );
                                                    }
                                                }
                                            }}
                                            className="px-3 py-1.5 rounded-[12px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-sm text-gray-700 focus:outline-none cursor-pointer"
                                        >
                                            <option value="active">Active</option>
                                            <option value="blocked">Block</option>
                                            <option disabled>──────────</option>
                                            <option value="update">Update Profile</option>
                                            <option value="password">Change Password</option>
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
