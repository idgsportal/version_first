export function StatCard({ label, value, accent }) {
    return (
        <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all">
            <div className="flex flex-col gap-3">
                <div
                    className={`inline-flex self-start px-3 py-1 rounded-full bg-gradient-to-r ${accent} text-white text-xs shadow-lg`}
                >
                    {label}
                </div>
                <div className="text-3xl text-gray-800">
                    {value}
                </div>
            </div>
        </div>
    );
}
