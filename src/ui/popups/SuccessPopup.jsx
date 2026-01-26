import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export function SuccessPopup({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <div className="backdrop-blur-[32px] bg-white/80 rounded-[24px] border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-6 max-w-md w-full pointer-events-auto animate-popup">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-[0_8px_24px_rgba(52,211,153,0.4)]">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>

                    <p className="text-gray-800">{message}</p>
                </div>
            </div>
        </div>
    );
}
