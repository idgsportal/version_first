import { LoginHeader } from "./LoginHeader";
import { LoginFooter } from "./LoginFooter";
import { Eye, EyeOff, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import Input from "../../ui/Input"
import { Link } from "react-router-dom";
import { login, isUserLoggedIn } from "../../redux/actions"
import { useNavigate } from "react-router-dom";
import { ButtonSpinner } from "../../ui/ButtonSpinner";
// import { toast } from "../../UI/Toast/ToastHelper";





export default function LoginLayout() {
    const [identifier, setidentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const auth = useSelector(state => state.auth)

    // useEffect(() => {
    //     if (auth.authenticate && auth.user?.role === "admin") {
    //         navigate("/admin");
    //     }
    // }, [auth.authenticate, auth.user, navigate]);

    const dispatch = useDispatch()
    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            identifier, password
        }
        dispatch(login(user))
    };

    return (
        <div className="min-h-screen w-full relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                Animated Gradient Orbs
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Header */}
                <LoginHeader />

                {/* Main Two-Column Layout */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
                        <div className="w-full  max-w-lg">
                            <div className="backdrop-blur-[26px] bg-white/65 rounded-[28px] border border-white/60 shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-8 md:p-12">
                                {/* Card Title */}
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-4xl text-gray-800 mb-2">Welcome Back</h2>
                                    <p className="text-sm text-gray-600">Login to access your account</p>
                                </div>

                                {/* Login Form */}
                                <form onSubmit={handleLogin} className="space-y-5">

                                    <div>
                                        <Input
                                            label="Email or Mobile Number"
                                            type="text"
                                            value={identifier}
                                            onChange={(e) => setidentifier(e.target.value)}
                                            placeholder="example@email.com or 9876543210"
                                            required
                                        />
                                    </div>

                                    {/* Password Input */}
                                    <div>
                                        <div className="relative">
                                            <Input
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                required

                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-[67%] -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="w-5 h-5" />
                                                ) : (
                                                    <Eye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        {auth.error && (
                                            <p className="text-red-500 text-sm mt-2 font-medium animate-shake">
                                                {auth.error}
                                            </p>
                                        )}

                                        {/* Success Message के लिए (Green Color) - अगर आप दिखाना चाहें */}
                                        {auth.message && !auth.error && (
                                            <p className="text-green-600 text-sm mt-2 font-medium">
                                                {auth.message}
                                            </p>
                                        )}
                                        <div className="text-right">
                                            <Link to={"forgot-password"}
                                                className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors inline-flex items-center gap-1">
                                                Forgot Password?</Link>

                                        </div>
                                    </div>

                                    {/* Forgot Password Link */}

                                    {/* Login Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                                    >

                                        {auth.loading ? (
                                            <ButtonSpinner message="Signing in..." />
                                        ) : (
                                            "Login to Account"
                                        )}
                                    </button>



                                </form>


                            </div>
                        </div>
                    </div>
                </main>

                <LoginFooter />
            </div>
        </div>
    )
}
