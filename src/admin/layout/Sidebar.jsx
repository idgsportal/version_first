import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Wallet,
    Users,
    Store,
    UserCog,
    Settings,
    X,
} from 'lucide-react';

function Sidebar({ collapsed, mobileOpen, onMobileClose }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const base =
        'flex items-center gap-3 px-4 py-3 rounded-[18px] transition-all';
    const activeCls =
        'bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-[24px] border border-blue-300/40 shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-blue-600';
    const inactiveCls = 'hover:bg-white/50 text-gray-700';

    return (
        <>
            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onMobileClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)]
          backdrop-blur-[28px] bg-white/65 border-r border-white/30
          transition-all duration-300 z-40
          ${collapsed ? 'w-[80px]' : 'w-[240px]'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                {/* Close Button (Mobile) */}
                <button
                    onClick={onMobileClose}
                    className="lg:hidden absolute right-4 top-4 p-2 hover:bg-white/60 rounded-xl"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                <nav className="mt-12 lg:mt-4 px-3">
                    <ul className="space-y-2">
                        {/* Dashboard */}
                        <li>
                            <Link to="/admin" onClick={onMobileClose}
                                className={`${base} ${isActive('/admin') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`} >
                                <LayoutDashboard className="w-5 h-5" />
                                {!collapsed && <span>Dashboard</span>}
                            </Link>
                        </li>

                        {/* Fund Management */}
                        <li>
                            <Link to="/admin/fund-management" onClick={onMobileClose}
                                className={`${base} ${isActive('/admin/fund-management') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`} >
                                <Wallet className="w-5 h-5" />
                                {!collapsed && <span>Fund Management</span>}
                            </Link>
                        </li>

                        {/* Distributor */}
                        <li>
                            <Link to="/admin/distributor" onClick={onMobileClose}
                                className={`${base} ${isActive('/admin/distributor') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}>
                                <Users className="w-5 h-5" />
                                {!collapsed && <span>Distributor</span>}
                            </Link>
                        </li>

                        {/* Retailer */}
                        <li>
                            <Link to="/admin/retailer" onClick={onMobileClose}
                                className={`${base} ${isActive('/admin/retailer') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}>
                                <Store className="w-5 h-5" />
                                {!collapsed && <span>Retailer</span>}
                            </Link>
                        </li>

                        {/* Sub-Admin */}
                        <li>
                            <Link to="/admin/sub-admin" onClick={onMobileClose}
                                className={`${base} ${isActive('/admin/sub-admin') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}>
                                <UserCog className="w-5 h-5" />
                                {!collapsed && <span>Sub-Admin</span>}
                            </Link>
                        </li>

                        {/* Services */}
                        <li>
                            <Link to="/admin/services" onClick={onMobileClose}
                                className={`${base} ${isActive('/admin/services') ? activeCls : inactiveCls} ${collapsed ? 'justify-center' : ''}`}>
                                <Settings className="w-5 h-5" />
                                {!collapsed && <span>Services</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;
