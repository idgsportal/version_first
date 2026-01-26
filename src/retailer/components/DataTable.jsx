import { Download, Trash2, Edit, RefreshCw } from 'lucide-react';

const pendingData = [
    { sNo: 1, date: '2025-12-01', serviceType: 'Gumasta', name: 'Rajesh Kumar', mobile: '9876543210', certNo: 'GUM123456', status: 'In Progress', remark: 'Under Review' },
    { sNo: 2, date: '2025-12-02', serviceType: 'MPEDistrict', name: 'Priya Sharma', mobile: '9876543211', certNo: 'MPE789012', status: 'Pending', remark: 'Awaiting Documents' },
    { sNo: 3, date: '2025-12-03', serviceType: 'RTO Work', name: 'Amit Patel', mobile: '9876543212', certNo: 'RTO345678', status: 'In Progress', remark: 'Processing' },
];

const successData = [
    { sNo: 1, date: '2025-11-28', serviceType: 'Samagra', name: 'Sunita Devi', mobile: '9876543213', certNo: 'SAM901234', debit: '₹150', credit: '₹0' },
    { sNo: 2, date: '2025-11-29', serviceType: 'Gumasta', name: 'Vikram Singh', mobile: '9876543214', certNo: 'GUM567890', debit: '₹200', credit: '₹0' },
    { sNo: 3, date: '2025-11-30', serviceType: 'Print Portal', name: 'Anita Gupta', mobile: '9876543215', certNo: 'PRT123789', debit: '₹100', credit: '₹0' },
];

const draftData = [
    { sNo: 1, date: '2025-12-04', serviceType: 'MPEDistrict', name: 'Ramesh Yadav', mobile: '9876543216', certNo: '-', status: 'Draft' },
    { sNo: 2, date: '2025-12-05', serviceType: 'Gumasta', name: 'Pooja Verma', mobile: '9876543217', certNo: '-', status: 'Draft' },
];

const rejectedData = [
    { sNo: 1, date: '2025-11-25', serviceType: 'RTO Work', name: 'Kiran Desai', mobile: '9876543218', certNo: 'RTO999888', status: 'Rejected', remark: 'Invalid Documents', refundAmount: '₹250' },
    { sNo: 2, date: '2025-11-26', serviceType: 'Samagra', name: 'Deepak Joshi', mobile: '9876543219', certNo: 'SAM777666', status: 'Rejected', remark: 'Duplicate Entry', refundAmount: '₹150' },
];

export function DataTable({ activeTab, searchQuery }) {

    const filterData = (data) => {
        if (!searchQuery) return data;

        return data.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.mobile.includes(searchQuery)
        );
    };

    const renderPendingTable = () => {
        const filteredData = filterData(pendingData);

        return (
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/30">
                            <th className="px-4 py-3 text-left text-sm text-gray-600">S.No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Date</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Service Type</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Name</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Mobile</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Certificate No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Status</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.sNo} className="border-b border-white/20 hover:bg-white/30 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-700">{item.sNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.serviceType}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.mobile}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.certNo}</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-1 rounded-full text-xs bg-amber-400/20 text-amber-700 border border-amber-400/30">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">{item.remark}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderSuccessTable = () => {
        const filteredData = filterData(successData);

        return (
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/30">
                            <th className="px-4 py-3 text-left text-sm text-gray-600">S.No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Date</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Service Type</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Name</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Mobile</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Certificate No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Debit</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Credit</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.sNo} className="border-b border-white/20 hover:bg-white/30 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-700">{item.sNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.serviceType}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.mobile}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.certNo}</td>
                                <td className="px-4 py-3 text-sm text-red-600">{item.debit}</td>
                                <td className="px-4 py-3 text-sm text-green-600">{item.credit}</td>
                                <td className="px-4 py-3">
                                    <button className="p-2 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_4px_12px_rgba(96,165,250,0.3)] transition-all">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderDraftTable = () => {
        const filteredData = filterData(draftData);

        return (
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/30">
                            <th className="px-4 py-3 text-left text-sm text-gray-600">S.No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Date</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Service Type</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Name</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Mobile</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Status</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.sNo} className="border-b border-white/20 hover:bg-white/30 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-700">{item.sNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.serviceType}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.mobile}</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-1 rounded-full text-xs bg-blue-400/20 text-blue-700 border border-blue-400/30">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_4px_12px_rgba(96,165,250,0.3)] transition-all">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 rounded-xl bg-white/60 hover:bg-red-50 border border-white/40 text-red-500 hover:text-red-600 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderRejectedTable = () => {
        const filteredData = filterData(rejectedData);

        return (
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/30">
                            <th className="px-4 py-3 text-left text-sm text-gray-600">S.No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Date</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Service Type</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Name</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Mobile</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Certificate No</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Status</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Remark</th>
                            <th className="px-4 py-3 text-left text-sm text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.sNo} className="border-b border-white/20 hover:bg-white/30 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-700">{item.sNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.date}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.serviceType}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.mobile}</td>
                                <td className="px-4 py-3 text-sm text-gray-700">{item.certNo}</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-1 rounded-full text-xs bg-red-400/20 text-red-700 border border-red-400/30">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">{item.remark}</td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_4px_12px_rgba(96,165,250,0.3)] transition-all">
                                            <RefreshCw className="w-4 h-4" />
                                        </button>
                                        <button className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white text-xs shadow-[0_4px_12px_rgba(52,211,153,0.3)] transition-all">
                                            Refund {item.refundAmount}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
            {activeTab === 'pending' && renderPendingTable()}
            {activeTab === 'success' && renderSuccessTable()}
            {activeTab === 'draft' && renderDraftTable()}
            {activeTab === 'rejected' && renderRejectedTable()}
        </div>
    );
}
