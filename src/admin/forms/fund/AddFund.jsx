import React, { useEffect, useState } from 'react';
import { ArrowLeft, Plus, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddFundByAdmin, fetchUserData } from '../../../redux/actions/fundManagement';

export default function AddFund() {
    const [mobile, setMobile] = useState('');
    const [profile, setProfile] = useState(null);
    const [amount, setAmount] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector(state => state.fundManagement.user);
    const loading = useSelector(state => state.fundManagement.loading);

    /* ---------------- Fetch User ---------------- */
    const handleFetch = () => {
        if (mobile.length === 10) {
            setProfile(null);
            setSuccessMessage('');
            dispatch(fetchUserData(mobile));
        }
    };

    /* ---------------- Handle API Response ---------------- */
    useEffect(() => {
        if (userData === undefined) return;

        if (userData && (userData._id || userData.mobile)) {
            setProfile(userData);
            setSuccessMessage('');
        } else {
            setProfile(null);
            setSuccessMessage('User not found');
        }
    }, [userData]);

    /* ---------------- Transfer Fund ---------------- */
    const handleTransfer = () => {
        if (!amount || parseFloat(amount) <= 0) {
            setSuccessMessage('Please enter a valid amount');
            return;
        }

        dispatch(AddFundByAdmin(profile, amount));

        setSuccessMessage(
            `Fund of ₹${amount} added successfully to ${profile?.name || 'User'}`
        );

        setTimeout(() => {
            navigate('/admin/fund-management');
        }, 2500);
    };

    return (
        <div className="space-y-6 p-4">

            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                            <Plus className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-800 font-bold text-xl">Add Fund</h2>
                            <p className="text-sm text-gray-600 font-medium">
                                Add funds to retailer or distributor wallet
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[26px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-8">

                {/* Mobile Input */}
                <div className="mb-8">
                    <label className="block text-gray-700 mb-3 font-semibold text-sm uppercase tracking-wider">
                        User Mobile Number
                    </label>

                    <div className="flex gap-3">
                        <input
                            type="tel"
                            maxLength={10}
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value.replace(/\D/g, ''));
                                setProfile(null);
                                setSuccessMessage('');
                            }}
                            className="flex-1 px-5 py-4 rounded-[18px] backdrop-blur-[20px] bg-white/70 border border-white/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-all text-lg"
                            placeholder="Enter 10 digit mobile number"
                        />

                        <button
                            onClick={handleFetch}
                            disabled={mobile.length !== 10 || loading}
                            className="px-6 py-1 rounded-[16px] bg-gradient-to-r from-blue-400/40 to-purple-400/40 hover:from-blue-400/50 hover:to-purple-400/50 backdrop-blur-[20px] border border-blue-300/40 text-blue-700 transition-all flex items-center gap-2"
                        >
                            {loading ? 'Searching...' : <>
                                <Search className="w-4 h-4" /> Fetch
                            </>}
                        </button>

                    </div>
                </div>

                {/* Profile Card */}
                {profile && (
                    <div className="mb-6 p-6 rounded-[20px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-300/30 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                            <img
                                src={profile.profilePicture}
                                alt={profile.name}
                                className="w-24 h-24 rounded-[20px] border-4 border-white shadow-xl object-cover"
                            />

                            <div className="flex-1 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    <div className="bg-white/40 p-3 rounded-[12px] border border-white/20">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                                            Shop Name
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.shopName}
                                        </p>
                                    </div>

                                    <div className="bg-white/40 p-3 rounded-[12px] border border-white/20">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                                            Owner Name
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.name}
                                        </p>
                                    </div>

                                    <div className="bg-white/40 p-3 rounded-[12px] border border-white/20">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                                            Mobile
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.mobile}
                                        </p>
                                    </div>

                                    <div className="bg-white/40 p-3 rounded-[12px] border border-white/20 lg:col-span-2">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                                            Email
                                        </p>
                                        <p className="text-sm font-semibold text-gray-800">
                                            {profile.email}
                                        </p>
                                    </div>

                                    <div className="bg-green-500/10 p-3 rounded-[12px] border border-green-500/20">
                                        <p className="text-[10px] uppercase tracking-wider text-green-600 font-bold mb-1">
                                            Current Balance
                                        </p>
                                        <p className="text-sm font-bold text-green-700">
                                            ₹{profile?.wallet?.balance ?? 0}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Amount Input */}
                {profile && (
                    <div className="mb-6 animate-in fade-in duration-500">
                        <label className="block text-gray-700 mb-2 font-medium">
                            Amount to Add
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-lg font-semibold"
                            placeholder="Enter amount (e.g. 500)"
                        />
                    </div>
                )}

                {/* Success / Error Message */}
                {successMessage && (
                    <div className="mb-6 p-4 rounded-[16px] bg-green-500/10 border border-green-500/20 text-center animate-pulse">
                        <p className="text-sm font-medium text-green-700">
                            {successMessage}
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-700 font-medium hover:bg-white/80 transition-all active:scale-95"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleTransfer}
                        disabled={!profile || !amount || loading}
                        className="px-8 py-3 rounded-[16px] bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-[0_4px_16px_rgba(34,197,94,0.3)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
                    >
                        {loading ? 'Processing...' : 'Transfer Fund'}
                    </button>
                </div>
            </div>
        </div>
    );
}
