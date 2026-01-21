import { Settings, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState } from 'react';

const dummyServices = [
    { id: 1, name: 'Income Certificate', category: 'MPEDistrict', isActive: true },
    { id: 2, name: 'Domicile Certificate', category: 'MPEDistrict', isActive: true },
    { id: 3, name: 'Caste Certificate', category: 'MPEDistrict', isActive: true },
    { id: 4, name: 'Apply PAN Card', category: 'PAN Services', isActive: true },
    { id: 5, name: 'Correction PAN Card', category: 'PAN Services', isActive: true },
    { id: 6, name: 'Gumasta Registration', category: 'Gumasta', isActive: false },
    { id: 7, name: 'Learning License', category: 'RTO', isActive: true },
    { id: 8, name: 'Driving License', category: 'RTO', isActive: true },
    { id: 9, name: 'Samagra ID Approval', category: 'Samagra', isActive: true },
    { id: 10, name: 'Member ID Approval', category: 'Samagra', isActive: true },
];

export default function ServicesManagement() {
    const [services, setServices] = useState(dummyServices);

    const toggleService = (id) => {
        setServices(services.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                        <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <h1 className="text-gray-800">Services Management</h1>
                        <p className="text-sm text-gray-600">Enable or disable services for retailers</p>
                    </div>
                </div>
            </div>

            {/* Info Card */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[20px] border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-5">
                <p className="text-sm text-gray-700">
                    <strong>Note:</strong> When you disable a service, retailers will no longer be able to access it from their portal. Enable/disable services using the toggle buttons below.
                </p>
            </div>

            {/* Services Table */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 border-b border-white/40">
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Service Name</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Category</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm text-gray-700">Toggle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.id} className="border-b border-white/20 hover:bg-white/40 transition-all">
                                    <td className="px-6 py-4 text-sm text-gray-800">{service.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{service.category}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-[12px] text-xs ${service.isActive
                                                ? 'bg-green-400/20 border border-green-300/40 text-green-700'
                                                : 'bg-gray-400/20 border border-gray-300/40 text-gray-700'
                                            }`}>
                                            {service.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => toggleService(service.id)}
                                            className="flex items-center gap-2 px-4 py-2 rounded-[12px] backdrop-blur-[20px] bg-white/60 border border-white/40 hover:bg-white/80 transition-all"
                                        >
                                            {service.isActive ? (
                                                <>
                                                    <ToggleRight className="w-5 h-5 text-green-600" />
                                                    <span className="text-sm text-green-700">Enabled</span>
                                                </>
                                            ) : (
                                                <>
                                                    <ToggleLeft className="w-5 h-5 text-gray-600" />
                                                    <span className="text-sm text-gray-700">Disabled</span>
                                                </>
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="backdrop-blur-[24px] bg-white/60 rounded-[20px] border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-6">
                    <h3 className="text-gray-800 mb-2">Active Services</h3>
                    <p className="text-3xl text-green-700">{services.filter(s => s.isActive).length}</p>
                </div>
                <div className="backdrop-blur-[24px] bg-white/60 rounded-[20px] border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-6">
                    <h3 className="text-gray-800 mb-2">Disabled Services</h3>
                    <p className="text-3xl text-gray-700">{services.filter(s => !s.isActive).length}</p>
                </div>
            </div>
        </div>
    );
}