import { CheckCircle2, Clock, XCircle, RefreshCw, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Dashboard({ }) {

    const navigate = useNavigate();
    const summaryCards = [
        {
            id: 'success-forms',
            title: 'Success Forms',
            count: 1847,
            icon: CheckCircle2,
            gradient: 'from-green-400/20 to-emerald-400/20',
            iconColor: 'text-green-600',
            borderColor: 'border-green-300/40',
            route: '/admin/forms/success',
        },
        {
            id: 'pending-forms',
            title: 'Pending Forms',
            count: 234,
            icon: Clock,
            gradient: 'from-orange-400/20 to-amber-400/20',
            iconColor: 'text-orange-600',
            borderColor: 'border-orange-300/40',
            route: '/admin/forms/pending',
        },
        {
            id: 'rejected-forms',
            title: 'Rejected Forms',
            count: 89,
            icon: XCircle,
            gradient: 'from-red-400/20 to-pink-400/20',
            iconColor: 'text-red-600',
            borderColor: 'border-red-300/40',
            route: '/admin/forms/rejected',
        },
        {
            id: 'refund-forms',
            title: 'Refund Forms',
            count: 42,
            icon: RefreshCw,
            gradient: 'from-blue-400/20 to-cyan-400/20',
            iconColor: 'text-blue-600',
            borderColor: 'border-blue-300/40',
            route: '/admin/forms/refund',
        },
    ];

    return (

        <div className="p-6 lg:p-8 space-y-6">

            {/* ================= HEADER ================= */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                        <LayoutDashboard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-gray-800">Admin Dashboard</h1>
                        <p className="text-sm text-gray-600">
                            Overview of all forms and activities
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= SUMMARY CARDS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <button
                            key={card.id}
                            onClick={() => navigate(card.route)}
                            className="
                backdrop-blur-[24px] bg-white/60 rounded-[24px]
                border border-white/40
                shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                p-6
                transition-all duration-300
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                hover:bg-white/70
                hover:scale-105
                cursor-pointer
                text-left
              "
                        >
                            {/* Icon + Count */}
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className={`
                    w-14 h-14 rounded-[18px]
                    bg-gradient-to-br ${card.gradient}
                    flex items-center justify-center
                    border ${card.borderColor}
                  `}
                                >
                                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                                </div>

                                <div className="text-right">
                                    <div className="text-3xl text-gray-800">
                                        {card.count}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        Total
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-gray-800">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Click to view details
                            </p>
                        </button>
                    );
                })}
            </div>

            {/* ================= QUICK STATS ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Today's Activity */}
                <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                    <h3 className="text-gray-800 mb-4">Today's Activity</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">New Applications</span>
                            <span className="text-sm text-gray-800">47</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Processed</span>
                            <span className="text-sm text-green-700">32</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Pending Review</span>
                            <span className="text-sm text-orange-700">15</span>
                        </div>
                    </div>
                </div>

                {/* Revenue Stats */}
                <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                    <h3 className="text-gray-800 mb-4">Revenue Stats</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Today's Collection</span>
                            <span className="text-sm text-green-700">₹24,580</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">This Month</span>
                            <span className="text-sm text-green-700">₹5,67,340</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Revenue</span>
                            <span className="text-sm text-gray-800">₹82,45,680</span>
                        </div>
                    </div>
                </div>

                {/* User Stats */}
                <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                    <h3 className="text-gray-800 mb-4">User Statistics</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Retailers</span>
                            <span className="text-sm text-gray-800">156</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Distributors</span>
                            <span className="text-sm text-gray-800">24</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Active Sub-Admins</span>
                            <span className="text-sm text-blue-700">8</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= RECENT ACTIVITIES ================= */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <h3 className="text-gray-800 mb-4">Recent Activities</h3>

                <div className="space-y-3">
                    {[
                        ['bg-green-500', 'Income Certificate approved for Rahul Sharma', '2 minutes ago'],
                        ['bg-blue-500', 'New retailer registered: Mohan Electronics', '15 minutes ago'],
                        ['bg-orange-500', 'Fund request of ₹5,000 from distributor pending', '32 minutes ago'],
                        ['bg-purple-500', 'Sub-Admin "Rajesh Kumar" processed 12 applications', '1 hour ago'],
                    ].map(([dot, text, time], i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-[16px] bg-white/40 hover:bg-white/60 transition-all"
                        >
                            <div className={`w-2 h-2 rounded-full ${dot}`} />
                            <div className="flex-1">
                                <p className="text-sm text-gray-800">{text}</p>
                                <p className="text-xs text-gray-600">{time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}


export default Dashboard