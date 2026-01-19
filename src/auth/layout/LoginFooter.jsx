import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';



export function LoginFooter() {
    return (
        <>
            {/* Footer */}
            <footer className="hidden md:block mt-12 md:mt-16 backdrop-blur-[20px] bg-white/40 border-t border-white/60 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Column 1 - About */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
                                </div>
                                <h3 className="text-lg text-gray-800">IDGS PORTAL</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Your one-stop solution for all government services and documentation needs.
                            </p>
                        </div>

                        {/* Column 2 - Quick Links */}
                        <div>
                            <h4 className="text-sm text-gray-800 mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to={"/"} className="loginPageText">Services</Link></li>
                                <li><Link to={"/"} className="loginPageText">About Us</Link></li>
                                <li><Link to={"/"} className="loginPageText">Pricing</Link></li>
                                <li><Link to={"/"} className="loginPageText">FAQ</Link></li>

                            </ul>
                        </div>

                        {/* Column 3 - Contact */}
                        <div>
                            <h4 className="text-sm text-gray-800 mb-4">Contact Us</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                    <span>idgsportal@gmail.com</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Phone className="w-4 h-4 text-blue-600" />
                                    <span>+91 7389490201</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Indore, Madhya Pradesh, India</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 - Social Media */}
                        <div>
                            <h4 className="text-sm text-gray-800 mb-4">Follow Us</h4>
                            <div className="flex gap-3">
                                <Link to={"/"} className="w-9 h-9 rounded-full backdrop-blur-[20px] bg-white/60 border border-white/60 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                                    <Facebook className="w-4 h-4" />
                                </Link>
                                <Link to={"/"} className="w-9 h-9 rounded-full backdrop-blur-[20px] bg-white/60 border border-white/60 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                                    <Twitter className="w-4 h-4" />
                                </Link>
                                <Link to={"/"} className="w-9 h-9 rounded-full backdrop-blur-[20px] bg-white/60 border border-white/60 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                                <Link to={"/"} className="w-9 h-9 rounded-full backdrop-blur-[20px] bg-white/60 border border-white/60 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                                    <Instagram className="w-4 h-4" />
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-4 pt-6 border-t border-white/60 text-center">
                        <p className="text-sm text-gray-600">
                            © 2025 IDGS Portal. All rights reserved. |
                            <Link to={"/"} className="text-blue-600 hover:underline ml-1">Privacy Policy</Link> |
                            <Link to={"/"} className="text-blue-600 hover:underline ml-1">Terms of Service</Link>

                        </p>
                    </div>
                </div>
            </footer >
        </>
    )
}

