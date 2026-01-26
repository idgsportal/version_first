function TextArea({ label, name, value, onChange, placeholder, rows = 3, ...rest }) {
    return (
        <div className="md:col-span-2">
            {label && <label className="block text-gray-700 mb-2">{label}</label>}
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-[16px] outline-1 outline-slate-200 backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                {...rest}
            />
        </div>
    );
}

export default TextArea;