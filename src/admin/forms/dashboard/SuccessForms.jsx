import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Eye, Edit, X } from 'lucide-react';

const dummySuccessForms = [
    {
        id: 1,
        date: '2025-01-15',
        serviceType: 'Income Certificate',
        applicantName: 'Rahul Sharma',
        mobile: '9876543210',
        certificateNumber: 'INC/2025/001234',
        shopName: 'Sharma Electronics',
        subAdminName: 'Rajesh Kumar',
        status: 'Success',
        formAmount: 150,
        subAdminCommission: 30,
        submittedTime: '2025-01-15 10:30 AM',
        acceptedTime: '2025-01-15 11:00 AM',
        successTime: '2025-01-15 02:45 PM',
        formDetails: {
            fatherName: 'Ram Sharma',
            address: '123, MG Road, Indore',
            annualIncome: '2,50,000',
            purpose: 'Educational',
        }
    },
    {
        id: 2,
        date: '2025-01-15',
        serviceType: 'Domicile Certificate',
        applicantName: 'Priya Verma',
        mobile: '9876543211',
        certificateNumber: 'DOM/2025/001235',
        shopName: 'Verma Services',
        subAdminName: 'Admin',
        status: 'Success',
        formAmount: 120,
        subAdminCommission: 0,
        submittedTime: '2025-01-15 09:15 AM',
        acceptedTime: '2025-01-15 09:20 AM',
        successTime: '2025-01-15 01:30 PM',
        formDetails: {
            fatherName: 'Suresh Verma',
            address: '456, AB Road, Indore',
            duration: '15 Years',
            purpose: 'Government Job',
        }
    }
];

function SuccessForms({ onBack }) {
    const [selectedForm, setSelectedForm] = useState(null);
    const navigate = useNavigate();

    // Helper for inline shadows to avoid Tailwind v4 build errors
    const glassShadow = { boxShadow: '0 8px 24px rgba(0,0,0,0.06)' };
    const modalShadow = { boxShadow: '0 20px 60px rgba(0,0,0,0.2)' };

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
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Success Forms</h2>
                            <p className="text-sm text-gray-600">All successfully processed applications</p>
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
                            <tr className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">S.No</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Service</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Applicant</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Certificate No.</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummySuccessForms.map((form, index) => (
                                <tr key={form.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                    <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{form.serviceType}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{form.applicantName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-mono text-xs">{form.certificateNumber}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-[12px] bg-green-400/20 border border-green-300/40 text-xs text-green-700 font-medium">
                                            {form.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setSelectedForm(form)}
                                                className="p-2 rounded-[10px] bg-blue-400/20 border border-blue-300/40 hover:bg-blue-400/30 transition-all group"
                                            >
                                                <Eye className="w-4 h-4 text-blue-700" />
                                            </button>
                                            <button className="p-2 rounded-[10px] bg-purple-400/20 border border-purple-300/40 hover:bg-purple-400/30 transition-all">
                                                <Edit className="w-4 h-4 text-purple-700" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail View Modal */}
            {selectedForm && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div
                        style={modalShadow}
                        className="backdrop-blur-[32px] bg-white/90 rounded-[28px] border border-white/60 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 backdrop-blur-[32px] bg-white/80 border-b border-white/40 p-6 rounded-t-[28px] flex items-center justify-between z-10">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Form Details</h3>
                                <p className="text-sm text-gray-600">{selectedForm.serviceType}</p>
                            </div>
                            <button
                                onClick={() => setSelectedForm(null)}
                                className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                            >
                                <X className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-6">
                            {/* Timeline Section */}
                            <div className="p-5 rounded-[20px] bg-gradient-to-br from-green-400/10 to-emerald-400/10 border border-green-300/30">
                                <h4 className="font-semibold text-gray-800 mb-4">Processing Timeline</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Submitted: <span className="font-normal text-gray-600">{selectedForm.submittedTime}</span></p>
                                        </div>
                                    </div>
                                    <div className="ml-1.5 h-4 w-0.5 bg-green-300"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Accepted by {selectedForm.subAdminName}: <span className="font-normal text-gray-600">{selectedForm.acceptedTime}</span></p>
                                        </div>
                                    </div>
                                    <div className="ml-1.5 h-4 w-0.5 bg-green-300"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Final Success: <span className="font-normal text-gray-600">{selectedForm.successTime}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Data Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <DetailItem label="Applicant Name" value={selectedForm.applicantName} />
                                <DetailItem label="Certificate No." value={selectedForm.certificateNumber} />
                                <DetailItem label="Mobile" value={selectedForm.mobile} />
                                <DetailItem label="Shop Name" value={selectedForm.shopName} />
                                <div className="md:col-span-2">
                                    <DetailItem label="Address" value={selectedForm.formDetails.address} />
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="sticky bottom-0 backdrop-blur-[32px] bg-white/80 border-t border-white/40 p-6 rounded-b-[28px] flex justify-end">
                            <button
                                onClick={() => setSelectedForm(null)}
                                className="px-8 py-3 rounded-[16px] bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
                            >
                                Close View
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Sub-component for clean rendering
function DetailItem({ label, value }) {
    return (
        <div className="p-4 rounded-[16px] bg-white/60 border border-white/40">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">{label}</p>
            <p className="text-sm text-gray-800">{value || 'N/A'}</p>
        </div>
    );
}

export default SuccessForms