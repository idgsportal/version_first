import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, X } from 'lucide-react';

const GlobalToast = () => {
    const [data, setData] = useState(null);
    const timerRef = useRef(null);

    const clearTimer = () => { if (timerRef.current) clearTimeout(timerRef.current); };

    const startTimer = () => {
        clearTimer();
        timerRef.current = setTimeout(() => setData(null), 4000);
    };

    useEffect(() => {
        const handleToast = (e) => {
            setData(e.detail);
            startTimer();
        };
        window.addEventListener("SHOW_TOAST", handleToast);
        return () => {
            window.removeEventListener("SHOW_TOAST", handleToast);
            clearTimer();
        };
    }, []);

    if (!data) return null;

    // Ultra-Light Apple Glass Morphism Styles
    const styles = {
        success: {
            border: "border-emerald-500/40",
            glow: "shadow-[0_20px_50px_rgba(16,185,129,0.12)]",
            iconColor: "#10b981",
            accent: "bg-emerald-500/10"
        },
        error: {
            border: "border-red-500/40",
            glow: "shadow-[0_20px_50px_rgba(239,68,68,0.12)]",
            iconColor: "#ef4444",
            accent: "bg-red-500/10"
        },
        warning: {
            border: "border-amber-500/40",
            glow: "shadow-[0_20px_50px_rgba(245,158,11,0.12)]",
            iconColor: "#f59e0b",
            accent: "bg-amber-500/10"
        }
    };

    const currentStyle = styles[data.type] || styles.success;

    return (
        <div
            onMouseEnter={clearTimer}
            onMouseLeave={startTimer}
            className={`fixed top-10 right-10 z-[99999] min-w-[340px] animate-apple-entry`}
        >
            {/* Main Glass Body */}
            <div className={`
        relative overflow-hidden
        bg-white/40 backdrop-blur-[25px] 
        rounded-[24px] border-[1.5px] ${currentStyle.border}
        p-4 flex items-center gap-4
        ${currentStyle.glow}
        ring-1 ring-white/50
      `}>

                {/* Subtle Gradient Overlay inside the toast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none" />

                {/* Rounded Icon Container */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${currentStyle.accent} border border-white/40 shadow-sm`}>
                    {data.type === 'success' && <CheckCircle2 color={currentStyle.iconColor} size={26} strokeWidth={2.5} />}
                    {data.type === 'error' && <XCircle color={currentStyle.iconColor} size={26} strokeWidth={2.5} />}
                    {data.type === 'warning' && <AlertTriangle color={currentStyle.iconColor} size={26} strokeWidth={2.5} />}
                </div>

                {/* Text Area */}
                <div className="relative z-10 flex-1 ">
                    <p className="text-gray-900 font-bold text-[16px] tracking-tight leading-none mb-1">
                        {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                    </p>
                    <p className="text-gray-700/80 text-[14px] font-medium leading-snug">
                        {data.msg}
                    </p>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setData(null)}
                    className="relative z-10 p-1.5 rounded-full hover:bg-black/5 text-gray-400 hover:text-gray-900 transition-all"
                >
                    <X size={18} />
                </button>

                {/* Bottom Thin Loading Line */}
                <div
                    className="absolute bottom-0 left-0 h-[3px] bg-white/60"
                    style={{ width: '0%', animation: 'loading-bar 4s linear forwards' }}
                />
            </div>
        </div>
    );
};

export default GlobalToast;