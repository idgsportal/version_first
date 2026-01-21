import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './AdminHeader';
import Sidebar from './AdminSidebar';

function Layout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
        <div className="min-h-screen bg-[#f5f7fb]">
            {/* Header */}
            <Header
                sidebarCollapsed={sidebarCollapsed}
                onToggleSidebar={() => setSidebarCollapsed(prev => !prev)}
                onMenuClick={() => setMobileOpen(true)}
            />

            {/* Sidebar */}
            <Sidebar
                collapsed={sidebarCollapsed}
                mobileOpen={mobileOpen}
                activeItem={activeItem}
                onItemClick={setActiveItem}
                onMobileClose={() => setMobileOpen(false)}
            />

            {/* Main Content */}
            <main
                className={`pt-16 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-[70px]' : 'lg:ml-[240px]'
                    }`}
            >
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
