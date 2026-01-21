import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, CheckCircle } from 'lucide-react';

const dummyPendingForms = [
    {
        id: 1,
        date: '2025-01-15',
        serviceType: 'Income Certificate',
        name: 'Mohan Kumar',
        mobile: '9876543220',
        shopName: 'Kumar Services',
        subAdminName: null,
        status: 'Pending',
        isAccepted: false,
    },
    {
        id: 2,
        date: '2025-01-15',
        serviceType: 'Caste Certificate',
        name: 'Sita Devi',
        mobile: '9876543221',
        shopName: 'Devi Enterprises',
        subAdminName: 'Rajesh Kumar',
        status: 'Accepted',
        isAccepted: true,
    },
    {
        id: 3,
        date: '2025-01-15',
        serviceType: 'Domicile Certificate',
        name: 'Vijay Singh',
        mobile: '9876543222',
        shopName: 'Singh Digital',
        subAdminName: null,
        status: 'Pending',
        isAccepted: false,
    },
];

export default function PendingForms({ onBack }) {
    const [forms, setForms] = useState(dummyPendingForms);
    const navigate = useNavigate();

    // Helper for inline shadows to avoid Tailwind v4 build errors
    const glassShadow = { boxShadow: '0 8px 24px rgba(0,0,0,0.06)' };
    const smallShadow = { boxShadow: '0 4px 16px rgba(0,0,0,0.04)' };

    const handleAccept = (formId) => {
        setForms(forms.map(form =>
            form.id === formId
                ? { ...form, isAccepted: true, subAdminName: 'Admin', status: 'Accepted' }
                : form
        ));
    };

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
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-orange-400/20 to-amber-400/20 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Pending Forms</h2>
                            <p className="text-sm text-gray-600">Applications awaiting processing</p>
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
                            <tr className="bg-gradient-to-r from-orange-400/10 to-amber-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Service Type</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Mobile</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Shop Name</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Sub-Admin</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forms.map((form, index) => (
                                <tr key={form.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                    <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{form.serviceType}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.mobile}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.shopName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                                        {form.subAdminName || (
                                            <span className="text-gray-400 italic font-normal">Not Assigned</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-[12px] text-xs font-medium border ${form.isAccepted
                                            ? 'bg-blue-400/20 border-blue-300/40 text-blue-700'
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
                                            {!form.isAccepted && (
                                                <button
                                                    onClick={() => handleAccept(form.id)}
                                                    className="p-2 rounded-[10px] bg-green-400/20 border border-green-300/40 hover:bg-green-400/30 transition-all"
                                                    title="Accept"
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

            {/* Info Note */}
            <div
                style={smallShadow}
                className="backdrop-blur-[24px] bg-white/60 rounded-[20px] border border-white/40 p-5"
            >
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Processing Rules:</h4>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                    <li>If Sub-Admin has accepted the form, their name will be displayed.</li>
                    <li>If not accepted by Sub-Admin, Admin can accept and process.</li>
                    <li>When Admin accepts, Sub-Admin name will show as <span className="font-bold">"Admin"</span>.</li>
                    <li>Accepted forms will be moved to processing queue.</li>
                </ul>
            </div>
        </div>
    );
}