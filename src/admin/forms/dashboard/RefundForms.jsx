import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Eye, CheckCircle } from 'lucide-react';

const dummyRefundForms = [
    {
        id: 1,
        date: '2025-01-15',
        serviceType: 'Income Certificate',
        name: 'Deepak Yadav',
        mobile: '9876543240',
        shopName: 'Yadav Services',
        refundAmount: 150,
        refundReason: 'Service cancelled by user',
        status: 'Pending Refund',
    },
    {
        id: 2,
        date: '2025-01-14',
        serviceType: 'Caste Certificate',
        name: 'Kiran Desai',
        mobile: '9876543241',
        shopName: 'Desai Digital',
        refundAmount: 180,
        refundReason: 'Duplicate application',
        status: 'Refunded',
    },
    {
        id: 3,
        date: '2025-01-14',
        serviceType: 'Domicile Certificate',
        name: 'Neha Malhotra',
        mobile: '9876543242',
        shopName: 'Malhotra Enterprises',
        refundAmount: 120,
        refundReason: 'Technical error in form submission',
        status: 'Pending Refund',
    },
];

export default function RefundForms({ onBack }) {
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
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                            <RefreshCw className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Refund Forms</h2>
                            <p className="text-sm text-gray-600">Applications requesting refund</p>
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
                            <tr className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Service Type</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Mobile</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Shop Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Refund Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Reason</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyRefundForms.map((form, index) => (
                                <tr key={form.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                    <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{form.serviceType}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.mobile}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.shopName}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-green-700">₹{form.refundAmount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate inline-flex items-center whitespace-normal" title={form.refundReason}>
                                        {form.refundReason}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-[12px] text-xs font-medium border border inline-flex items-center whitespace-nowrap ${form.status === 'Refunded'
                                            ? 'bg-green-400/20 border-green-300/40 text-green-700'
                                            : 'bg-orange-400/20 border-orange-300/40 text-orange-700'
                                            }`}>
                                            {form.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-2 rounded-[10px] bg-blue-400/20 border border-blue-300/40 hover:bg-blue-400/30 transition-all"
                                                title="View Data"
                                            >
                                                <Eye className="w-4 h-4 text-blue-700" />
                                            </button>
                                            {form.status === 'Pending Refund' && (
                                                <button
                                                    className="p-2 rounded-[10px] bg-green-400/20 border border-green-300/40 hover:bg-green-400/30 transition-all"
                                                    title="Process Refund"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-700" />
                                                </button>
                                            )}
                                        </div>
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