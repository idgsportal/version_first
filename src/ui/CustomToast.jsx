import React, { useEffect } from 'react';

const CustomToast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    // Design Logic with Gradients and White Text
    const styles = {
        // Solid background with subtle transparency + High contrast text
        success: "bg-gradient-to-br from-emerald-500/80 via-green-600/70 to-teal-700/80 border-white/40 shadow-[0_8px_32px_rgba(16,185,129,0.3)]",

        error: "bg-gradient-to-br from-rose-500/80 via-red-600/70 to-orange-700/80 border-white/40 shadow-[0_8px_32px_rgba(239,68,68,0.3)]",

        warning: "bg-gradient-to-br from-amber-400/80 via-yellow-500/70 to-orange-500/80 border-white/40 shadow-[0_8px_32px_rgba(245,158,11,0.3)]",
    };

    const icons = {
        success: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
        ),
        error: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
        ),
        warning: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
    };

    return (
        <div className={`fixed top-10 right-5 z-[9999] min-w-[320px] px-6 py-4 rounded-2xl border backdrop-blur-2xl shadow-2xl flex items-center gap-4 animate-slide-in ring-1 ring-inset ring-white/20 ${styles[type]}`}>
            {/* Icon Container */}
            <div className="flex-shrink-0">
                {icons[type]}
            </div>

            {/* Message - Forced White Text */}
            <div className="flex-grow">
                <p className="text-white text-[16px] font-bold tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                    {message}
                </p>
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors p-1"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Bottom Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-1 bg-white/40 rounded-b-2xl transition-all duration-[4000ms] ease-linear"
                style={{ width: '0%', animation: 'loading-bar 4s linear forwards' }}
            />
        </div>
    );
};

export default CustomToast;