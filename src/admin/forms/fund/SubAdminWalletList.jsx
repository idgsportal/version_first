import { ArrowLeft, UserCog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const dummySubAdmins = [
    {
        id: 1,
        profileImage: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=EA580C&color=fff',
        name: 'Rajesh Kumar',
        shopName: 'Kumar Services Hub',
        mobile: '9876543230',
        walletAmount: 18900,
    },
    {
        id: 2,
        profileImage: 'https://ui-avatars.com/api/?name=Suresh+Singh&background=16A34A&color=fff',
        name: 'Suresh Singh',
        shopName: 'Singh Admin Point',
        mobile: '9876543231',
        walletAmount: 14550,
    },
];

export default function SubAdminWalletList() {
    const navigate = useNavigate();

    const totalAmount = dummySubAdmins.reduce(
        (sum, s) => sum + s.walletAmount,
        0
    );

    return (
        <div className="space-y-6 p-3">
            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-orange-400/20 to-amber-400/20 flex items-center justify-center">
                                <UserCog className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                                <h2 className="text-gray-800">
                                    Sub-Admin Wallet Balance
                                </h2>
                                <p className="text-sm text-gray-600">
                                    View all sub-admin wallet balances
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-2.5 rounded-[16px] backdrop-blur-[20px] bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-300/40">
                        <span className="text-green-700">
                            Total: ₹{totalAmount.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-orange-400/10 to-amber-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    S.No
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Profile
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Sub-Admin Name
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Shop Name
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Mobile
                                </th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">
                                    Wallet Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {dummySubAdmins.map((subadmin, index) => (
                                <tr
                                    key={subadmin.id}
                                    className="border-b border-white/20 hover:bg-white/40 transition-all"
                                >
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-4">
                                        <img
                                            src={subadmin.profileImage}
                                            alt={subadmin.name}
                                            className="w-10 h-10 rounded-[12px] border border-white/60"
                                        />
                                    </td>

                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {subadmin.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {subadmin.shopName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {subadmin.mobile}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-700">
                                        ₹{subadmin.walletAmount}
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
