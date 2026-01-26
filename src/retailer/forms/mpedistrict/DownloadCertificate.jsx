import { useEffect, useState } from 'react';
import { ArrowLeft, Search, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DownloadCertificate() {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [certificateData, setCertificateData] = useState([]);
    const [loading, setLoading] = useState(false);

    // ---------------- STATUS STYLE ----------------
    const getStatusStyle = (status) => {
        switch (status) {
            case 'success':
                return 'bg-emerald-400/20 text-emerald-700 border-emerald-400/30';
            case 'rejected':
                return 'bg-red-400/20 text-red-700 border-red-400/30';
            case 'pending':
                return 'bg-amber-400/20 text-amber-700 border-amber-400/30';
            default:
                return 'bg-blue-400/20 text-blue-700 border-blue-400/30';
        }
    };

    // ---------------- FETCH LIST (API READY) ----------------
    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/certificates/my-list`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            // Authorization: `Bearer ${token}` // agar auth use ho
                        },
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || 'Failed to fetch certificates');
                }

                setCertificateData(result.data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertificates();
    }, []);

    // ---------------- SEARCH FILTER ----------------
    const filteredData = certificateData.filter(
        (item) =>
            item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.mobile?.includes(searchQuery) ||
            item.certNo?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // ---------------- DOWNLOAD CERTIFICATE ----------------
    const handleDownload = async (certId) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/certificates/download/${certId}`,
                {
                    method: 'GET',
                }
            );

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'certificate.pdf';
            a.click();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed', error);
        }
    };

    return (
        <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            {/* Header */}
            <div className="p-6 border-b border-white/30">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 rounded-[16px] hover:bg-white/50 transition-colors text-gray-700"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Services
                </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                <h3 className="text-xl text-gray-800">Download Certificate</h3>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by Name, Mobile, or Certificate No."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/30">
                                <th className="px-4 py-3 text-left text-sm text-gray-600">S.No</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Date</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Service Type</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Name</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Mobile No</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Certificate No</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Status</th>
                                <th className="px-4 py-3 text-left text-sm text-gray-600">Download</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading && (
                                <tr>
                                    <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
                                        Loading...
                                    </td>
                                </tr>
                            )}

                            {!loading &&
                                filteredData.map((item, index) => (
                                    <tr
                                        key={item._id || index}
                                        className="border-b border-white/20 hover:bg-white/30 transition-colors"
                                    >
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {item.date}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {item.serviceType}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {item.mobile}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {item.certNo}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs border capitalize ${getStatusStyle(
                                                    item.status
                                                )}`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            {item.status === 'success' && (
                                                <button
                                                    onClick={() => handleDownload(item._id)}
                                                    className="p-2 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_4px_12px_rgba(96,165,250,0.3)] transition-all"
                                                >
                                                    <Download className="w-4 h-4" />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}

                            {!loading && filteredData.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
                                        No records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
