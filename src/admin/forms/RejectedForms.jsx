import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, XCircle, Eye } from 'lucide-react';

const dummyRejectedForms = [
    {
        id: 1,
        date: '2025-01-14',
        serviceType: 'Income Certificate',
        name: 'Anil Gupta',
        mobile: '9876543230',
        shopName: 'Gupta Services',
        subAdminName: 'Rajesh Kumar',
        rejectionReason: 'Incomplete documents - Aadhaar card not clear',
        status: 'Rejected',
    },
    {
        id: 2,
        date: '2025-01-14',
        serviceType: 'Domicile Certificate',
        name: 'Ravi Sharma',
        mobile: '9876543231',
        shopName: 'Sharma Digital',
        subAdminName: 'Admin',
        rejectionReason: 'Invalid address proof',
        status: 'Rejected',
    },
    {
        id: 3,
        date: '2025-01-13',
        serviceType: 'Caste Certificate',
        name: 'Sunita Patel',
        mobile: '9876543232',
        shopName: 'Patel Enterprises',
        subAdminName: 'Suresh Singh',
        rejectionReason: 'Mismatch in applicant details',
        status: 'Rejected',
    },
];

export default function RejectedForms({ onBack }) {
    const navigate = useNavigate();

    // Tailwind v4 safe shadow
    const glassShadow = { boxShadow: '0 8px 24px rgba(0,0,0,0.06)' };

    return (
        <div className="space-y-6 p-3">
            {/* Header */}
            <div
                style={glassShadow}
                className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 p-6"
            >
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onBack ? onBack() : navigate(-1)}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-red-400/20 to-pink-400/20 flex items-center justify-center">
                            <XCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Rejected Forms</h2>
                            <p className="text-sm text-gray-600">Applications that were rejected</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Container */}
            <div
                style={glassShadow}
                className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-red-400/10 to-pink-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Service Type</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Mobile</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Shop Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Sub-Admin</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Rejection Reason</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyRejectedForms.map((form, index) => (
                                <tr key={form.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                    <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{form.serviceType}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.mobile}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.shopName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{form.subAdminName}</td>
                                    <td
                                        className="px-6 py-4 text-sm text-red-600 max-w-xs truncate"
                                        title={form.rejectionReason}
                                    >
                                        {form.rejectionReason}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-[12px] bg-red-400/20 border border-red-300/40 text-xs text-red-700 font-medium">
                                            {form.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            className="p-2 rounded-[10px] bg-blue-400/20 border border-blue-300/40 hover:bg-blue-400/30 transition-all"
                                            title="View Data"
                                        >
                                            <Eye className="w-4 h-4 text-blue-700" />
                                        </button>
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