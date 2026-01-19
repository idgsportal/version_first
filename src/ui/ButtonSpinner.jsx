// ButtonSpinner.jsx
export const ButtonSpinner = ({ message = "Loading..." }) => (
    <div className="flex items-center justify-center gap-2">
        <div className="relative w-5 h-5">
            {/* Background Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>

            {/* Spinning Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        {/* Props se aane wali value yahan dikhegi */}
        <span className="text-sm font-medium tracking-wide">{message}</span>
    </div>
);