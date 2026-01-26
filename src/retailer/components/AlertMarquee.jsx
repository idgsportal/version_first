export function AlertMarquee() {
    return (
        <div className="mx-6 mt-4 backdrop-blur-[24px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_6px_20px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="py-3 px-4">
                <div className="flex animate-marquee whitespace-nowrap">
                    <span className="text-sm text-gray-700 mx-8">
                        ⚠️ Wallet Balance Low
                    </span>
                    <span className="text-sm text-gray-700 mx-8">
                        🎉 New Service Added (MPEDistrict)
                    </span>
                    <span className="text-sm text-gray-700 mx-8">
                        ⚠️ Wallet Balance Low
                    </span>
                    <span className="text-sm text-gray-700 mx-8">
                        🎉 New Service Added (MPEDistrict)
                    </span>
                    <span className="text-sm text-gray-700 mx-8">
                        ⚠️ Wallet Balance Low
                    </span>
                    <span className="text-sm text-gray-700 mx-8">
                        🎉 New Service Added (MPEDistrict)
                    </span>
                </div>
            </div>
        </div>
    );
}
