import { FileText, Home, Users, RefreshCw, Download } from 'lucide-react';

const services = [
    {
        id: 'income',
        title: 'Income Certificate',
        icon: FileText,
        amount: '₹120',
        gradient: 'from-blue-400 to-cyan-400',
    },
    {
        id: 'domicile',
        title: 'Domicile Certificate',
        icon: Home,
        amount: '₹150',
        gradient: 'from-emerald-400 to-teal-400',
    },
    {
        id: 'blood-relation-caste',
        title: 'Blood Relation Caste Certificate',
        icon: Users,
        amount: '₹500',
        gradient: 'from-purple-400 to-pink-400',
    },
    {
        id: 'manual-to-digital-caste',
        title: 'Manual to Digital Caste Certificate',
        icon: RefreshCw,
        amount: '₹700',
        gradient: 'from-amber-400 to-orange-400',
    },
    {
        id: 'download',
        title: 'Download Certificate',
        icon: Download,
        amount: 'Free',
        gradient: 'from-indigo-400 to-blue-400',
    },
];

export function MPEDistrictServices({ onServiceSelect }) {
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
                    const Icon = service.icon;

                    return (
                        <div
                            key={service.id}
                            className="backdrop-blur-[28px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all p-6 space-y-4 group"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-[18px] bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                <Icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 min-h-[3rem]">
                                {service.title}
                            </h3>

                            {/* Amount */}
                            <div
                                className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-20 backdrop-blur-[16px] border border-white/40`}
                            >
                                <span className="text-sm text-gray-700">
                                    Amount: {service.amount}
                                </span>
                            </div>

                            {/* Open Button */}
                            <button
                                onClick={() => onServiceSelect(service.id)}
                                className={`w-full py-3 rounded-[18px] bg-gradient-to-r ${service.gradient} hover:shadow-[0_8px_20px_rgba(96,165,250,0.35)] text-white transition-all`}
                            >
                                Open
                            </button>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
