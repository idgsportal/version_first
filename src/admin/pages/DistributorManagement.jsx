import React, { useState } from 'react';
import { Users, UserPlus, Eye, Upload } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { createUser, updateStatus } from '../../redux/actions/createUserAction';

/* ======================================================
   OVERVIEW PAGE
====================================================== */
export default function DistributorManagement() {
    const navigate = useNavigate();
    const distributorState = useSelector(
        state => state.fundManagement.distributor.users || []
    );

    return (
        <div className="space-y-6 p-3">
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <h1 className="text-gray-800">Distributor Management</h1>
                        <p className="text-sm text-gray-600">Manage distributor accounts</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                    onClick={() => navigate('/admin/distributors/create')}
                    className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 hover:bg-white/70 transition-all text-left"
                >
                    <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center mb-4">
                        <UserPlus className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-gray-800">Create Distributor</h3>
                    <p className="text-sm text-gray-600">Add new distributor</p>
                </button>

                <button
                    onClick={() => navigate('/admin/distributors')}
                    className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 hover:bg-white/70 transition-all text-left"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                            <Eye className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="text-3xl">{distributorState.length}</div>
                    </div>
                    <h3 className="text-gray-800">View Distributors</h3>
                    <p className="text-sm text-gray-600">Manage all distributors</p>
                </button>
            </div>
        </div>
    );
}

/* ======================================================
   CREATE DISTRIBUTOR PAGE
====================================================== */

/* ======================================================
   VIEW DISTRIBUTORS PAGE
====================================================== */
