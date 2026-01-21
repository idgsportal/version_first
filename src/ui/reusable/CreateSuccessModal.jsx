import { X, CheckCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function CreateSuccessModal({ isOpen, onClose, userType, data }) {
    const [copiedField, setCopiedField] = useState(null);

    if (!isOpen) return null;

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto backdrop-blur-[32px] bg-white/70 rounded-[28px] border border-white/60 shadow-[0_24px_48px_rgba(0,0,0,0.12)] p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-green-400/30 to-emerald-400/30 flex items-center justify-center">
                            <CheckCircle className="w-7 h-7 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-800">{userType} Created Successfully!</h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Account details have been generated
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Success Banner */}
                <div className="mb-6 p-4 rounded-[20px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-300/40">
                    <p className="text-sm text-green-700 text-center">
                        ✓ {userType} account has been created successfully. Please save the password below.
                    </p>
                </div>

                {/* Details Grid */}
                <div className="space-y-4">
                    {/* Login Credentials Section */}
                    <div className="p-6 rounded-[20px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-300/30">
                        <h3 className="text-gray-800 mb-4 flex items-center gap-2">
                            🔐 Login Credentials
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-[14px] bg-white/50">
                                <div className="flex-1">
                                    <p className="text-xs text-gray-600 mb-1">Mobile Number (Login ID)</p>
                                    <p className="text-sm text-gray-800">{data.mobile}</p>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(data.mobile, 'mobile')}
                                    className="w-9 h-9 rounded-[12px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                                >
                                    {copiedField === 'mobile' ? (
                                        <Check className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-gray-600" />
                                    )}
                                </button>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-[14px] bg-white/50">
                                <div className="flex-1">
                                    <p className="text-xs text-gray-600 mb-1">Password</p>
                                    <p className="text-sm text-gray-800 font-mono">{data.password}</p>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(data.password, 'password')}
                                    className="w-9 h-9 rounded-[12px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                                >
                                    {copiedField === 'password' ? (
                                        <Check className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="p-6 rounded-[20px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 border border-purple-300/30">
                        <h3 className="text-gray-800 mb-4">👤 Personal Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="p-3 rounded-[14px] bg-white/50">
                                <p className="text-xs text-gray-600 mb-1">Name</p>
                                <p className="text-sm text-gray-800">{data.name}</p>
                            </div>
                            {data.dob && (
                                <div className="p-3 rounded-[14px] bg-white/50">
                                    <p className="text-xs text-gray-600 mb-1">Date of Birth</p>
                                    <p className="text-sm text-gray-800">{formatDate(data.dob)}</p>
                                </div>
                            )}
                            <div className="p-3 rounded-[14px] bg-white/50">
                                <p className="text-xs text-gray-600 mb-1">Mobile Number</p>
                                <p className="text-sm text-gray-800">{data.mobile}</p>
                            </div>
                            {data.email && (
                                <div className="p-3 rounded-[14px] bg-white/50">
                                    <p className="text-xs text-gray-600 mb-1">Email</p>
                                    <p className="text-sm text-gray-800">{data.email}</p>
                                </div>
                            )}
                            {data.aadhaar && (
                                <div className="p-3 rounded-[14px] bg-white/50">
                                    <p className="text-xs text-gray-600 mb-1">Aadhaar Number</p>
                                    <p className="text-sm text-gray-800">{data.aadhaar}</p>
                                </div>
                            )}
                            {data.pan && (
                                <div className="p-3 rounded-[14px] bg-white/50">
                                    <p className="text-xs text-gray-600 mb-1">PAN Number</p>
                                    <p className="text-sm text-gray-800">{data.pan}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Shop Details */}
                    {data.shopName && (
                        <div className="p-6 rounded-[20px] bg-gradient-to-br from-orange-400/10 to-amber-400/10 border border-orange-300/30">
                            <h3 className="text-gray-800 mb-4">🏪 Shop Details</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="p-3 rounded-[14px] bg-white/50">
                                    <p className="text-xs text-gray-600 mb-1">Shop Name</p>
                                    <p className="text-sm text-gray-800">{data.shopName}</p>
                                </div>
                                {data.shopAddress && (
                                    <div className="p-3 rounded-[14px] bg-white/50">
                                        <p className="text-xs text-gray-600 mb-1">Shop Address</p>
                                        <p className="text-sm text-gray-800">{data.shopAddress}</p>
                                    </div>
                                )}
                                {data.shopPincode && (
                                    <div className="p-3 rounded-[14px] bg-white/50">
                                        <p className="text-xs text-gray-600 mb-1">Pincode</p>
                                        <p className="text-sm text-gray-800">{data.shopPincode}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Service Access for Sub-Admin */}
                    {data.serviceAccess && (
                        <div className="p-6 rounded-[20px] bg-gradient-to-br from-cyan-400/10 to-teal-400/10 border border-cyan-300/30">
                            <h3 className="text-gray-800 mb-4">🔧 Service Access</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.entries(data.serviceAccess).map(([key, value]) => (
                                    <div key={key} className="p-3 rounded-[14px] bg-white/50">
                                        <p className="text-xs text-gray-600 mb-1 capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </p>
                                        <p className={`text-sm ${value ? 'text-green-700' : 'text-gray-500'}`}>
                                            {value ? '✓ Active' : '✗ Inactive'}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Warning */}
                <div className="mt-6 p-4 rounded-[16px] bg-gradient-to-br from-amber-400/10 to-orange-400/10 border border-amber-300/30">
                    <p className="text-xs text-amber-700 text-center">
                        ⚠️ Please save this password securely. It will not be shown again.
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-8 py-3 rounded-[16px] bg-gradient-to-r from-blue-400/40 to-cyan-400/40 hover:from-blue-400/50 hover:to-cyan-400/50 backdrop-blur-[20px] border border-blue-300/40 text-blue-700 shadow-[0_4px_16px_rgba(59,130,246,0.2)] transition-all"
                    >
                        Close & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}