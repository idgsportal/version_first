import { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { DataTable } from '../components/DataTable';
import { Search } from 'lucide-react';

export default function RetailerDashboard() {
    const [activeTab, setActiveTab] = useState('pending');
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { label: 'Pending Forms', value: '24', accent: 'from-amber-400 to-orange-400' },
        { label: 'Success Forms', value: '152', accent: 'from-emerald-400 to-teal-400' },
        { label: 'Draft Forms', value: '8', accent: 'from-blue-400 to-cyan-400' },
        { label: 'Rejected Forms', value: '5', accent: 'from-red-400 to-pink-400' },
        { label: 'Refund Total Amount', value: '₹2,450', accent: 'from-purple-400 to-indigo-400' },
    ];

    const tabs = ['pending', 'success', 'draft', 'rejected'];

    return (
        <div className="space-y-6 p-3">

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>

            {/* Search Bar */}
            <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by Name or Mobile No."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-2">
                <div className="flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                px-6 py-2.5 rounded-[16px] capitalize transition-all
                ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-[0_4px_16px_rgba(96,165,250,0.3)]'
                                    : 'text-gray-600 hover:bg-white/50'
                                }
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Data Table */}
            <DataTable activeTab={activeTab} searchQuery={searchQuery} />

        </div>
    );
}
