import React from 'react';
import { Menu, ChevronLeft, ChevronRight, Wallet, Users, UserCog, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/actions/AuthAction';


function Header({ onMenuClick, sidebarCollapsed, onToggleSidebar }) {
    const dispatch = useDispatch();
    return (
        <header className="fixed top-0 left-0 right-0 h-16 backdrop-blur-[28px] bg-white/70 border-b border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] z-50">
            <div className="h-full px-6 flex items-center justify-between gap-4">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        <Menu className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg">A</span>
                        </div>
                        <div>
                            <h1 className="text-gray-800 font-bold whitespace-nowrap leading-tight">IDGS PORTAL</h1>
                            <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">Admin Dashboard</p>
                        </div>
                    </div>

                    {/* Desktop Sidebar Toggle */}
                    <button
                        onClick={onToggleSidebar}
                        className="hidden lg:flex w-9 h-9 rounded-[12px] bg-white/60 border border-white/40 items-center justify-center hover:bg-white/80 transition-all"
                    >
                        {sidebarCollapsed ? (
                            <ChevronRight className="w-4 h-4 text-gray-700" />
                        ) : (
                            <ChevronLeft className="w-4 h-4 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    {/* Admin Wallet Balance */}
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-[14px] backdrop-blur-[20px] bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-300/40 shadow-sm">
                        <Wallet className="w-4 h-4 text-green-700" />
                        <span className="text-sm font-bold text-green-700 font-mono tracking-tighter">₹2,45,680</span>
                    </div>

                    {/* Total Logged-in Users */}
                    <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-[14px] backdrop-blur-[20px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border border-blue-300/40">
                        <Users className="w-4 h-4 text-blue-700" />
                        <span className="text-sm font-semibold text-blue-700">Users: 47</span>
                    </div>

                    {/* Total Logged-in Sub-Admins */}
                    <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-[14px] backdrop-blur-[20px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-300/40">
                        <UserCog className="w-4 h-4 text-purple-700" />
                        <span className="text-sm font-semibold text-purple-700">Sub-Admins: 8</span>
                    </div>

                    {/* Logout Button */}
                    <button className="flex items-center gap-2 px-4 py-2 rounded-[14px] backdrop-blur-[20px] bg-gradient-to-r from-red-400/20 to-orange-400/20 border border-red-300/40 hover:from-red-400/30 hover:to-orange-400/30 transition-all active:scale-95 group">
                        <LogOut className="w-4 h-4 text-red-700 group-hover:-translate-x-0.5 transition-transform" />
                        <span onClick={() => dispatch(signout())} className="hidden sm:inline text-sm font-bold text-red-700">Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header