import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

const dummySubAdmins = [
    {
        id: 1,
        profilePhoto: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=EA580C&color=fff',
        name: 'Rajesh Kumar',
        shopName: 'Kumar Services Hub',
        mobile: '9876543230',
        email: 'rajesh@kumar.com',
        walletBalance: 18900,
        status: 'Active',
    },
    {
        id: 2,
        profilePhoto: 'https://ui-avatars.com/api/?name=Suresh+Singh&background=16A34A&color=fff',
        name: 'Suresh Singh',
        shopName: 'Singh Admin Point',
        mobile: '9876543231',
        email: 'suresh@singh.com',
        walletBalance: 14550,
        status: 'Active',
    },
];

function SubAdminList() {
    const navigate = useNavigate()
    return (
        <div className="space-y-6 p-3">
            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
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
                            <h2 className="text-gray-800">View Sub-Admins</h2>
                            <p className="text-sm text-gray-600">Manage all sub-admins</p>
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
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Sr No</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Profile</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Shop Name</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Mobile</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Email</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Wallet Balance</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummySubAdmins.map((subadmin, index) => (
                                <tr key={subadmin.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                    <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                                    <td className="px-6 py-4">
                                        <img src={subadmin.profilePhoto} alt={subadmin.name} className="w-10 h-10 rounded-[12px]" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{subadmin.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{subadmin.shopName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{subadmin.mobile}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{subadmin.email}</td>
                                    <td className="px-6 py-4 text-sm text-green-700">₹{subadmin.walletBalance}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-[12px] text-xs bg-green-400/20 border border-green-300/40 text-green-700">
                                            {subadmin.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select className="px-3 py-1.5 rounded-[12px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-sm text-gray-700 focus:outline-none">
                                            <option>Block</option>
                                            <option>Active</option>
                                            <option>Update Profile</option>
                                            <option>Change Password</option>
                                            <option>Access Services</option>
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

export default SubAdminList
