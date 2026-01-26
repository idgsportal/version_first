import { CheckCircle, Copy, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearCreatedUser } from '../../../redux/actions/createUserAction';

export default function CreateSuccessPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { createdUser } = useSelector(state => state.users.users);
    const [copiedField, setCopiedField] = useState(null);

    // /* 🔒 Safety: direct URL access block */
    // // useEffect(() => {
    // //     if (!createdUser) {
    // //         return (
    // //             <div className="p-6 text-center">
    // //                 <p>Invalid access</p>
    // //                 <button onClick={() => navigate("/admin/distributors")}>
    // //                     Go Back
    // //                 </button>
    // //             </div>
    // //         );
    // //     }
    // // }, []);

    // // if (!createdUser) return null;

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

    const userTypeLabel =
        createdUser.role === 'distributor'
            ? 'Distributor'
            : createdUser.role === 'retailer'
                ? 'Retailer'
                : 'User';

    return (
        <div className="min-h-screen p-6 bg-slate-50 flex justify-center">
            <div className="w-full max-w-4xl backdrop-blur-[32px] bg-white/70 rounded-[28px] border border-white/60 shadow-[0_24px_48px_rgba(0,0,0,0.12)] p-8">

                {/* HEADER */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-green-400/30 to-emerald-400/30 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-xl font-semibold">
                            {userTypeLabel} Created Successfully
                        </h2>
                        <p className="text-sm text-gray-600">
                            Please save the login credentials carefully
                        </p>
                    </div>
                </div>

                {/* WARNING */}
                <div className="mb-6 p-4 rounded-[16px] bg-gradient-to-br from-amber-400/10 to-orange-400/10 border border-amber-300/30">
                    <p className="text-sm text-amber-700 text-center">
                        ⚠️ This password will be shown only once. Save it before leaving this page.
                    </p>
                </div>

                {/* LOGIN DETAILS */}
                <div className="mb-6 p-6 rounded-[20px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-300/30">
                    <h3 className="text-gray-800 mb-4 font-medium">🔐 Login Credentials</h3>

                    <div className="space-y-3">
                        {/* MOBILE */}
                        <div className="flex justify-between items-center p-3 rounded-[14px] bg-white/60">
                            <div>
                                <p className="text-xs text-gray-600">Login Mobile</p>
                                <p className="text-sm text-gray-800">{createdUser.mobile}</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(createdUser.mobile, 'mobile')}
                                className="w-9 h-9 rounded-[12px] bg-white/60 border border-white/40 flex items-center justify-center"
                            >
                                {copiedField === 'mobile'
                                    ? <Check className="w-4 h-4 text-green-600" />
                                    : <Copy className="w-4 h-4 text-gray-600" />}
                            </button>
                        </div>

                        {/* PASSWORD */}
                        <div className="flex justify-between items-center p-3 rounded-[14px] bg-white/60">
                            <div>
                                <p className="text-xs text-gray-600">Password</p>
                                <p className="text-sm text-gray-800 font-mono">
                                    {createdUser.password}
                                </p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(createdUser.password, 'password')}
                                className="w-9 h-9 rounded-[12px] bg-white/60 border border-white/40 flex items-center justify-center"
                            >
                                {copiedField === 'password'
                                    ? <Check className="w-4 h-4 text-green-600" />
                                    : <Copy className="w-4 h-4 text-gray-600" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* PERSONAL DETAILS */}
                <div className="mb-6 p-6 rounded-[20px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 border border-purple-300/30">
                    <h3 className="text-gray-800 mb-4 font-medium">👤 Personal Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Info label="Name" value={createdUser.name} />
                        {createdUser.dob && (
                            <Info label="Date of Birth" value={formatDate(createdUser.dob)} />
                        )}
                        <Info label="Email" value={createdUser.email} />
                        <Info label="Mobile" value={createdUser.mobile} />
                    </div>
                </div>

                {/* SHOP DETAILS */}
                {createdUser.shopName && (
                    <div className="mb-6 p-6 rounded-[20px] bg-gradient-to-br from-orange-400/10 to-amber-400/10 border border-orange-300/30">
                        <h3 className="text-gray-800 mb-4 font-medium">🏪 Shop Details</h3>

                        <div className="space-y-3">
                            <Info label="Shop Name" value={createdUser.shopName} />
                            <Info label="Address" value={createdUser.shopAddress} />
                            <Info label="Pincode" value={createdUser.shopPincode} />
                        </div>
                    </div>
                )}

                {/* FOOTER */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => navigate('/admin/distributors')}
                        className="px-8 py-3 rounded-[16px] bg-gradient-to-r from-blue-400/40 to-cyan-400/40 hover:from-blue-400/50 hover:to-cyan-400/50 border border-blue-300/40 text-blue-700 shadow-[0_4px_16px_rgba(59,130,246,0.2)]"
                    >
                        Go to Distributor List
                    </button>
                </div>
            </div>
        </div>
    );
}

/* 🔹 Small reusable info card */
function Info({ label, value }) {
    if (!value) return null;
    return (
        <div className="p-3 rounded-[14px] bg-white/60">
            <p className="text-xs text-gray-600 mb-1">{label}</p>
            <p className="text-sm text-gray-800">{value}</p>
        </div>
    );
}
