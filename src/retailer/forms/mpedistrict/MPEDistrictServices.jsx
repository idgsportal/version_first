import {
    FileText,
    Home,
    Users,
    RefreshCw,
    Download
} from 'lucide-react';
import { useState } from 'react';

/**
 * backend serviceType → icon + gradient mapping
 * UI same रखने के लिए
 */
const SERVICE_UI_MAP = {
    income_certificate: {
        icon: FileText,
        gradient: 'from-blue-400 to-cyan-400',
    },
    domicile_certificate: {
        icon: Home,
        gradient: 'from-emerald-400 to-teal-400',
    },
    blood_relation_caste: {
        icon: Users,
        gradient: 'from-purple-400 to-pink-400',
    },
    manual_caste: {
        icon: RefreshCw,
        gradient: 'from-amber-400 to-orange-400',
    },
    download_certificate: {
        icon: Download,
        gradient: 'from-indigo-400 to-blue-400',
    },
};

export function MPEDistrictServices({ services, onServiceSelect }) {

    if (!services || services.length === 0) {
        return (
            <div className="text-center text-gray-500 py-10">
                No MP eDistrict services available
            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <h2 className="text-2xl text-gray-800">MPEDistrict Services</h2>
                <p className="text-sm text-gray-600 mt-1">
                    Select a service to get started
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                    const ui = SERVICE_UI_MAP[service.serviceType] || {};
                    const Icon = ui.icon || FileText;
                    const gradient = ui.gradient || 'from-red-400 to-red-500';

                    return (
                        <div
                            key={service._id}
                            className="backdrop-blur-[28px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all p-6 space-y-4 group"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-[18px] bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                <Icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 min-h-[3rem]">
                                {service.title}
                            </h3>

                            {/* Amount */}
                            <div
                                className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${gradient} bg-opacity-20 backdrop-blur-[16px] border border-white/40`}
                            >
                                <span className="text-sm text-gray-700">
                                    Amount: ₹{service.charge}
                                </span>
                            </div>

                            {/* Open Button */}
                            <button
                                onClick={() => onServiceSelect(service)}
                                className={`w-full py-3 rounded-[18px] bg-gradient-to-r ${gradient} hover:shadow-[0_8px_20px_rgba(96,165,250,0.35)] text-white transition-all`}
                            >
                                Open
                            </button>
                        </div>
                    );
                })}
                <div
                    className="backdrop-blur-[28px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all p-6 space-y-4 group"
                >
                    <div
                        className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center shadow-lg"
                    >
                        <Download className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-gray-800 min-h-[3rem]">
                        Download Certificate
                    </h3>

                    <div
                        className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 bg-opacity-20 backdrop-blur-[16px] border border-white/40"
                    >
                        <span className="text-sm text-gray-700">
                            Amount: Free
                        </span>
                    </div>

                    <button
                        onClick={() => onServiceSelect({ serviceType: 'download' })}
                        className="w-full py-3 rounded-[18px] bg-gradient-to-r from-indigo-400 to-blue-400 text-white transition-all"
                    >
                        Open
                    </button>
                </div>
            </div>


        </div>
    );
}
