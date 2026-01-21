

function Input({ label, name, type = "text", value, onChange, placeholder, ...rest }) {
    return (
        <div>
            <label className="block text-sm text-gray-700 mb-2" >{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3  rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none outline-1 outline-slate-200 focus:ring-2 focus:ring-blue-400/50"
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}

export default Input


