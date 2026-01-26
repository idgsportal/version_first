import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RetailerHeader } from './RetailerHeader';
import RetailerSidebar from './RetailerSidebar';
import { RetailerFooter } from './RetailerFooter';
import { AlertMarquee } from '../components/AlertMarquee';

export default function RetailerLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);


    return (
        <div className="min-h-screen bg-slate-50">

            <RetailerHeader
                onMenuClick={() => setMobileOpen(true)}
                sidebarCollapsed={sidebarCollapsed}
                onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
            <AlertMarquee />

            <RetailerSidebar
                collapsed={sidebarCollapsed}
                mobileOpen={mobileOpen}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                onMobileClose={() => setMobileOpen(false)}
            />

            <main
                className={` pb-[54px] transition-all
                ${sidebarCollapsed ? 'lg:ml-[80px]' : 'lg:ml-[240px]'}`}
            >


                <Outlet />
            </main>

            <RetailerFooter />
        </div>
    );
}
