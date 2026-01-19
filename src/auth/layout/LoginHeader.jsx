import { Link } from "react-router-dom"


export function LoginHeader() {
    return (
        <>
            <header className="backdrop-blur-[20px] bg-white/40 border-b border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo & Brand */}
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl text-gray-800">IDGS PORTAL</h1>
                                <p className="text-xs text-gray-600 hidden sm:block">All services in one place</p>
                            </div>
                        </div>

                        {/* Header Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            <Link to={"/"} className="loginPageText">Services</Link>
                            <Link to={"/"} className="loginPageText">About</Link>
                            <Link to={"/"} className="loginPageText">Contact</Link>
                            <Link to={"/"} className="loginPageText">Help</Link>

                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

