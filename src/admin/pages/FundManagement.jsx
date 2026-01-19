import { Wallet, Plus, Minus, Users, Store, UserCog } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllRollSummary } from '../../redux/actions';

export default function FundManagement() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchAllRollSummary()
    // }, [])
    const cards = [
        {
            id: 'add-fund',
            title: 'Add Fund',
            icon: Plus,
            gradient: 'from-green-400/20 to-emerald-400/20',
            iconColor: 'text-green-600',
            borderColor: 'border-green-300/40',
            description: 'Add funds to user wallets',
            route: '/admin/fund-management/add'
        },
        {
            id: 'deduct-fund',
            title: 'Deduct Fund',
            icon: Minus,
            gradient: 'from-red-400/20 to-pink-400/20',
            iconColor: 'text-red-600',
            borderColor: 'border-red-300/40',
            description: 'Deduct funds from wallets',
            route: '/admin/fund-management/deduct'
        },
        {
            id: 'retailer-wallet',
            title: 'Retailer Wallet Balance',
            amount: '₹12,45,680',
            icon: Store,
            gradient: 'from-blue-400/20 to-cyan-400/20',
            iconColor: 'text-blue-600',
            borderColor: 'border-blue-300/40',
            description: 'Total retailer wallet amount',
            route: '/admin/fund-management/retailer-list'
        },
        {
            id: 'distributor-wallet',
            title: 'Distributor Wallet Balance',
            amount: '₹8,34,200',
            icon: Users,
            gradient: 'from-purple-400/20 to-pink-400/20',
            iconColor: 'text-purple-600',
            borderColor: 'border-purple-300/40',
            description: 'Total distributor wallet amount',
            route: '/admin/fund-management/distributor-list'
        },
        {
            id: 'subadmin-wallet',
            title: 'Sub-Admin Wallet Balance',
            amount: '₹3,67,450',
            icon: UserCog,
            gradient: 'from-orange-400/20 to-amber-400/20',
            iconColor: 'text-orange-600',
            borderColor: 'border-orange-300/40',
            description: 'Total sub-admin wallet amount',
            route: '/admin/fund-management/subadmin-list'
        },
    ];

    return (
        <div className="p-6 lg:p-8 space-y-6">
            {/* Header (Same as before) */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h1 className="text-gray-800 text-2xl font-semibold">Fund Management</h1>
                        <p className="text-sm text-gray-600">Manage wallet transactions and balances</p>
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <button
                            key={card.id}
                            onClick={() => navigate(card.route)} // Navigate instead of setState
                            className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:scale-105 cursor-pointer text-left"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-14 h-14 rounded-[18px] bg-gradient-to-br ${card.gradient} flex items-center justify-center border ${card.borderColor}`}>
                                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                                </div>
                                {card.amount && (
                                    <div className="text-right">
                                        <div className="text-xl font-bold text-gray-800">{card.amount}</div>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-gray-800 font-medium mb-1">{card.title}</h3>
                            <p className="text-sm text-gray-600">{card.description}</p>
                        </button>
                    );
                })}
            </div>

            {/* Summary Stats (Same as before) */}
        </div>
    );
}