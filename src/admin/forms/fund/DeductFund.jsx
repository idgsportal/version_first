import React, { useEffect, useState } from 'react';
import { ArrowLeft, Minus, Search, Upload } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deductFundByAdmin, fetchUserData } from '../../../redux/actions/fundManagement';
import { useNavigate } from 'react-router-dom';

export default function DeductFund({ onBack }) {
    const [role, setRole] = useState('retailer');
    const [mobile, setMobile] = useState('');
    const [profile, setProfile] = useState(null);
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const userData = useSelector(state => state.fundManagement?.user);

    const navigate = useNavigate()

    /* ---------------- Fetch User ---------------- */
    const handleFetch = () => {
        if (mobile.length < 10) return;
        setProfile(null);
        setMessage('');
        dispatch(fetchUserData(mobile, role)); // role future use
    };

    /* ---------------- Handle User Data ---------------- */
    useEffect(() => {
        if (userData === undefined) return;

        if (userData && (userData._id || userData.mobile)) {
            setProfile(userData);
            setMessage('');
        } else {
            setProfile(null);
            setMessage('User not found with this mobile number');
        }
    }, [userData]);

    /* ---------------- Deduct Fund ---------------- */
    const handleDeduct = () => {
        const walletBalance = profile?.wallet?.balance ?? 0;

        if (!amount || parseFloat(amount) <= 0) {
            setMessage('Please enter a valid amount');
            return;
        }

        if (!reason.trim()) {
            setMessage('Please provide a reason for deduction');
            return;
        }

        if (parseFloat(amount) > walletBalance) {
            setMessage('Insufficient balance in user wallet');
            return;
        }

        dispatch(deductFundByAdmin(profile, amount, reason));

        setMessage(
            `Fund of ₹${amount} deducted successfully from ${profile?.name}'s wallet`
        );

        setTimeout(() => {
            setMobile('');
            setProfile(null);
            setAmount('');
            setReason('');
            setFile(null);
            setMessage('');
        }, 2000);
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-red-400/20 to-pink-400/20 flex items-center justify-center">
                            <Minus className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-800 font-semibold">
                                Deduct Fund
                            </h2>
                            <p className="text-sm text-gray-600">
                                Deduct funds from user wallet
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[26px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-8">




                {/* Mobile Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wider">
                        User Mobile Number
                    </label>
                    <div className="flex gap-3">
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value.replace(/\D/g, ''));
                                setProfile(null);
                                setMessage('');
                            }}
                            maxLength={10}
                            className="flex-1 px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter registered mobile number"
                        />
                        <button
                            onClick={handleFetch}
                            className="px-6 py-3 rounded-[16px] bg-gradient-to-r from-blue-400/40 to-purple-400/40 hover:from-blue-400/50 hover:to-purple-400/50 backdrop-blur-[20px] border border-blue-300/40 text-blue-700 font-medium transition-all flex items-center gap-2"
                        >
                            <Search className="w-4 h-4" />
                            Fetch
                        </button>
                    </div>
                </div>

                {/* Profile */}
                {profile && (
                    <div className="mb-6 p-6 rounded-[20px] bg-gradient-to-br from-red-400/10 to-pink-400/10 border border-red-300/30 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex items-start gap-4">
                            <img
                                src={profile.profilePicture}
                                alt={profile.name}
                                className="w-20 h-20 rounded-[16px] border-2 border-white shadow-md object-cover"
                            />
                            <div className="flex-1 space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                    <div>
                                        <p className="text-[10px] uppercase text-gray-500 font-bold">
                                            Shop Name
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.shopName}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase text-gray-500 font-bold">
                                            Owner Name
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.name}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase text-gray-500 font-bold">
                                            Mobile
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.mobile}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase text-gray-500 font-bold">
                                            Current Balance
                                        </p>
                                        <p className="text-sm font-bold text-red-600">
                                            ₹{profile?.wallet?.balance ?? 0}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Amount + Reason + Upload */}
                {profile && (
                    <div className="animate-in fade-in duration-500">

                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2 font-medium">
                                Amount to Deduct
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400/50 font-semibold"
                                placeholder="Enter amount (₹)"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2 font-medium">
                                Reason for Deduction
                            </label>
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400/50"
                                placeholder="Why is this fund being deducted?"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2 font-medium">
                                Upload Proof (Optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="hidden"
                                id="file-upload-deduct"
                            />
                            <label
                                htmlFor="file-upload-deduct"
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/40 border-2 border-dashed border-white/60 cursor-pointer hover:bg-white/60 transition-all active:scale-[0.99]"
                            >
                                <Upload className="w-5 h-5 text-gray-600" />
                                <span className="text-sm text-gray-700 font-medium">
                                    {file ? file.name : 'Choose file (receipt / screenshot)'}
                                </span>
                            </label>
                        </div>
                    </div>
                )}

                {/* Message */}
                {message && (
                    <div
                        className={`mb-6 p-4 rounded-[16px] animate-in zoom-in-95 duration-200 ${message.includes('successfully')
                            ? 'bg-green-500/10 border border-green-500/20'
                            : 'bg-orange-500/10 border border-orange-500/20'
                            }`}
                    >
                        <p
                            className={`text-sm font-medium text-center ${message.includes('successfully')
                                ? 'text-green-700'
                                : 'text-orange-700'
                                }`}
                        >
                            {message}
                        </p>
                    </div>
                )}

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-8">
                    <button
                        onClick={onBack}
                        className="px-6 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-700 font-medium hover:bg-white/80 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDeduct}
                        disabled={!profile || !amount || !reason}
                        className="px-8 py-3 rounded-[16px] bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold shadow-[0_4px_16px_rgba(239,68,68,0.3)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
                    >
                        Deduct Fund
                    </button>
                </div>
            </div>
        </div>
    );
}
