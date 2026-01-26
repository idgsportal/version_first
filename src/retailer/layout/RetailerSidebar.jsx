import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Wallet,
    Settings,
    FileText,
    Briefcase,
    Users,
    Car,
    CreditCard,
    Printer,
    MessageCircle,
    Phone,
    X,
    ChevronDown
} from 'lucide-react';

export function RetailerSidebar({ collapsed, mobileOpen, onMobileClose }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const [openServices, setOpenServices] = useState(false);

    const base =
        'flex items-center gap-3 px-4 py-3 rounded-[18px] transition-all';
    const activeCls =
        'bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-[24px] border border-blue-300/40 shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-blue-600';
    const inactiveCls = 'hover:bg-white/50 text-gray-700';

    return (
        <>
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onMobileClose}
                />
            )}

            <aside
                className={`
                    fixed top-16 left-0 h-[calc(100vh-4rem)]
                    backdrop-blur-[28px] bg-white/65 border-r border-white/30
                    transition-all duration-300 z-40
                    ${collapsed ? 'w-[80px]' : 'w-[240px]'}
                    ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <button
                    onClick={onMobileClose}
                    className="lg:hidden absolute right-4 top-4 p-2 hover:bg-white/60 rounded-xl"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                <nav className="mt-12 lg:mt-4 px-3">
                    <ul className="space-y-1">

                        {/* Wallet */}
                        <li>
                            <Link
                                to="/retailer/wallet"
                                onClick={onMobileClose}
                                className={`${base} ${isActive('/retailer/wallet') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}
                            >
                                <Wallet className="w-5 h-5" />
                                {!collapsed && <span>Wallet</span>}
                            </Link>
                        </li>

                        {/* Dashboard */}
                        <li>
                            <Link
                                to="/retailer"
                                onClick={onMobileClose}
                                className={`${base} ${isActive('/retailer') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}
                            >
                                <LayoutDashboard className="w-5 h-5" />
                                {!collapsed && <span>Dashboard</span>}
                            </Link>
                        </li>

                        {/* ================= SERVICES (Accordion) ================= */}
                        <li>
                            <button
                                onClick={() => setOpenServices(!openServices)}
                                className={`${base} ${openServices ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''} w-full`}
                            >
                                <Settings className="w-5 h-5" />
                                {!collapsed && (
                                    <>
                                        <span className="flex-1 text-left">Services</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openServices ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </>
                                )}
                            </button>

                            {/* Services Sub Menu */}
                            {openServices && !collapsed && (
                                <ul className="mt-1 space-y-1 pl-6">

                                    <li>
                                        <Link
                                            to="/retailer/mpedistrict"
                                            onClick={onMobileClose}
                                            className={`${base} ${isActive('/retailer/mpedistrict') ? activeCls : inactiveCls}`}
                                        >
                                            <FileText className="w-4 h-4" />
                                            <span>MPEDistrict</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/retailer/gumasta"
                                            onClick={onMobileClose}
                                            className={`${base} ${isActive('/retailer/gumasta') ? activeCls : inactiveCls}`}
                                        >
                                            <Briefcase className="w-4 h-4" />
                                            <span>Gumasta</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/retailer/samagra"
                                            onClick={onMobileClose}
                                            className={`${base} ${isActive('/retailer/gumasta') ? activeCls : inactiveCls}`}
                                        >
                                            <Briefcase className="w-4 h-4" />
                                            <span>Samagra</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/retailer/rto"
                                            onClick={onMobileClose}
                                            className={`${base} ${isActive('/retailer/rto') ? activeCls : inactiveCls}`}
                                        >
                                            <Car className="w-4 h-4" />
                                            <span>RTO Work</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/retailer/pancard"
                                            onClick={onMobileClose}
                                            className={`${base} ${isActive('/retailer/pancard') ? activeCls : inactiveCls}`}
                                        >
                                            <CreditCard className="w-4 h-4" />
                                            <span>PAN Card</span>
                                        </Link>
                                    </li>

                                </ul>
                            )}
                        </li>
                        {/* ================= END SERVICES ================= */}

                        {/* Print */}
                        <li>
                            <Link
                                to="/retailer/print"
                                onClick={onMobileClose}
                                className={`${base} ${isActive('/retailer/print') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}
                            >
                                <Printer className="w-5 h-5" />
                                {!collapsed && <span>Print Portal</span>}
                            </Link>
                        </li>

                        {/* Chat */}
                        <li>
                            <Link
                                to="/retailer/chat"
                                onClick={onMobileClose}
                                className={`${base} ${isActive('/retailer/chat') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}
                            >
                                <MessageCircle className="w-5 h-5" />
                                {!collapsed && <span>Chat Support</span>}
                            </Link>
                        </li>

                        {/* Contact */}
                        <li>
                            <Link
                                to="/retailer/contact"
                                onClick={onMobileClose}
                                className={`${base} ${isActive('/retailer/contact') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}
                            >
                                <Phone className="w-5 h-5" />
                                {!collapsed && <span>Contact Us</span>}
                            </Link>
                        </li>

                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default RetailerSidebar;
