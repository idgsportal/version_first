import { useState, useRef, useEffect } from 'react';
import { Menu, Bell, LogOut, ChevronDown, User, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RetailerHeader({ onMenuClick, sidebarCollapsed, onToggleSidebar }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="h-16 backdrop-blur-[28px] bg-white/65 border-b border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sticky top-0 z-50">
            <div className="h-full px-6 flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 hover:bg-white/40 rounded-xl transition-colors"
                    >
                        <Menu className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                            <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" />
                        </div>
                        <h1 className="text-gray-800 tracking-wide">IDGS PORTAL</h1>
                    </div>
                    <button
                        onClick={onToggleSidebar}
                        className="hidden lg:flex p-2 rounded-xl backdrop-blur-[24px]
             bg-white/60 hover:bg-white/80
             border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)]
             transition-all"
                    >
                        {sidebarCollapsed ? (
                            <ChevronRight className="w-4 h-4 text-gray-700" />
                        ) : (
                            <ChevronLeft className="w-4 h-4 text-gray-700" />
                        )}
                    </button>
                </div>

                <div className="flex items-center gap-4">

                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-[24px] bg-gradient-to-r from-white/70 to-white/50 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
                        <span className="text-sm text-gray-600">Wallet :</span>
                        <span className="text-emerald-600">₹500</span>
                    </div>

                    <button className="relative p-2.5 rounded-xl backdrop-blur-[24px] bg-white/60 hover:bg-white/80 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all">
                        <Bell className="w-5 h-5 text-gray-700" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-400 to-red-500 text-white text-xs rounded-full flex items-center justify-center shadow-lg">
                            3
                        </span>
                    </button>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-[24px] bg-white/60 hover:bg-white/80 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="hidden md:block text-sm text-gray-700">user@example.com</span>
                            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 backdrop-blur-[28px] bg-white/70 rounded-[22px] border border-white/40 shadow-[0_12px_32px_rgba(0,0,0,0.1)] overflow-hidden">
                                <button
                                    onClick={() => {
                                        navigate('/retailer/profile');
                                        setDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/60 transition-colors text-left"
                                >
                                    <User className="w-4 h-4 text-gray-600" />
                                    <span className="text-sm text-gray-700">Update Profile</span>
                                </button>
                                <button
                                    onClick={() => {
                                        navigate('/retailer/change-password');
                                        setDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/60 transition-colors text-left"
                                >
                                    <Lock className="w-4 h-4 text-gray-600" />
                                    <span className="text-sm text-gray-700">Change Password</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => navigate('/login')}
                        className="p-2.5 rounded-xl backdrop-blur-[24px] bg-white/60 hover:bg-red-50/80 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all group"
                    >
                        <LogOut className="w-5 h-5 text-gray-700 group-hover:text-red-500 transition-colors" />
                    </button>

                </div>
            </div>
        </header>
    );
}
