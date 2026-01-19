// export const Loader = () => {
//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 ">
//             {/* Glass Card Container */}
//             <div className="p-10 rounded-[40px] bg-white/40 border border-white/60 shadow-2xl backdrop-blur-2xl flex flex-col items-center gap-6">

//                 {/* Bouncy Dots Container */}
//                 <div className="flex items-center gap-2 h-12">
//                     {/* Dot 1 */}
//                     <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
//                     {/* Dot 2 */}
//                     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
//                     {/* Dot 3 */}
//                     <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce"></div>
//                 </div>

//                 {/* Text Section */}
//                 <div className="text-center space-y-1">
//                     <h3 className="text-gray-900 font-bold tracking-tight text-lg">Verifying</h3>
//                     <p className="text-[11px] text-blue-600 font-bold uppercase tracking-[0.3em] opacity-80 animate-pulse">
//                         IDGS Portal
//                     </p>
//                 </div>

//                 {/* Glossy Overlay Effect */}
//                 <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>
//             </div>
//         </div>
//     );
// };

export const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/10 backdrop-blur-md">
            {/* Glass Card Container */}
            <div className="relative p-8 rounded-[32px] bg-white/40 border border-white/60 shadow-2xl backdrop-blur-2xl flex flex-col items-center gap-4">

                {/* Animated Spinner */}
                <div className="relative w-16 h-16">
                    {/* Outer Rotating Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>

                    {/* Inner Static Blur Circle */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-sm"></div>

                </div>

                {/* Text */}
                <div className="text-center">
                    <p className="text-gray-800 font-semibold tracking-wide animate-pulse">Processing</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">Please Wait</p>
                </div>

            </div>
        </div>
    );
};