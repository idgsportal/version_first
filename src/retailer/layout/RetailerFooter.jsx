import { useState, useEffect } from 'react';

export function RetailerFooter() {
    const [clickCount, setClickCount] = useState(0);
    const [showGenius, setShowGenius] = useState(false);

    useEffect(() => {
        if (clickCount === 10) {
            setShowGenius(true);
            setTimeout(() => {
                setShowGenius(false);
                setClickCount(0);
            }, 3000);
        }
    }, [clickCount]);

    return (
        <>
            <footer
                onClick={() => setClickCount(clickCount + 1)}
                className="fixed bottom-0 left-0 right-0 w-full h-[24px] backdrop-blur-[24px] bg-white/60 border-t border-white/40 shadow-[0_-4px_14px_rgba(0,0,0,0.06)] rounded-t-[24px] cursor-pointer select-none z-30"
            >
                <div className="h-full px-6 flex items-center justify-center relative">
                    <div className="text-sm text-gray-600">copyright @2025</div>
                    <div className="absolute right-6 text-sm text-gray-600">created by gaurav soni</div>
                </div>
            </footer>

            {showGenius && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
                    <div className="animate-genius backdrop-blur-[32px] bg-gradient-to-br from-white/80 to-white/60 rounded-[28px] border-2 border-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.2)] p-8 pointer-events-auto">
                        <div className="text-center space-y-4">
                            <div className="text-6xl">🎉</div>
                            <h2 className="text-3xl text-gray-800">You Are Genius</h2>
                            <div className="text-5xl">🚀</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
