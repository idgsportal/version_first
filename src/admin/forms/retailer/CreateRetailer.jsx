import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Upload } from "lucide-react";

function CreateRetailer() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        shopName: "",
        shopAddress: "",
        retailerName: "",
        dob: "",
        mobile: "",
        email: "",
        aadhaar: "",
        pan: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !formData.shopName ||
            !formData.retailerName ||
            !formData.mobile
        ) {
            setSuccessMessage("Please fill all required fields");
            return;
        }
        setSuccessMessage("Retailer created successfully!");
        setTimeout(() => {
            setCurrentView("view");
            setFormData({
                shopName: "",
                shopAddress: "",
                retailerName: "",
                dob: "",
                mobile: "",
                email: "",
                aadhaar: "",
                pan: "",
            });
            setSuccessMessage("");
        }, 2000);
    };
    return (


        <div className="space-y-6 p-3">
            {/* Header */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[24px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-[14px] bg-white/60 border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                        ←
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center">
                            <UserPlus className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-800">
                                Create Retailer
                            </h2>
                            <p className="text-sm text-gray-600">
                                Add new retailer to the system
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="backdrop-blur-[24px] bg-white/60 rounded-[26px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Shop Name *
                        </label>
                        <input
                            type="text"
                            value={formData.shopName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    shopName: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter shop name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Retailer Name *
                        </label>
                        <input
                            type="text"
                            value={formData.retailerName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    retailerName: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter retailer name"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2">
                            Shop Address *
                        </label>
                        <textarea
                            value={formData.shopAddress}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    shopAddress: e.target.value,
                                })
                            }
                            rows={3}
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter shop address"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Date of Birth *
                        </label>
                        <input
                            type="date"
                            value={formData.dob}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    dob: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Mobile Number *
                        </label>
                        <input
                            type="tel"
                            value={formData.mobile}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    mobile: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter mobile number"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Email ID *
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">
                            Aadhaar Number *
                        </label>
                        <input
                            type="text"
                            value={formData.aadhaar}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    aadhaar: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter Aadhaar number"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">
                            PAN Number *
                        </label>
                        <input
                            type="text"
                            value={formData.pan}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    pan: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            placeholder="Enter PAN number"
                        />
                    </div>
                </div>

                {/* File Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[
                        "Shop Photo",
                        "Profile Photo",
                        "Aadhaar Card",
                        "PAN Card",
                    ].map((label) => (
                        <div key={label}>
                            <label className="block text-gray-700 mb-2">
                                Upload {label} *
                            </label>
                            <input
                                type="file"
                                className="hidden"
                                id={`retailer-${label.replace(" ", "-").toLowerCase()}`}
                            />
                            <label
                                htmlFor={`retailer-${label.replace(" ", "-").toLowerCase()}`}
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border-2 border-dashed border-white/40 cursor-pointer hover:bg-white/80 transition-all"
                            >
                                <Upload className="w-5 h-5 text-gray-600" />
                                <span className="text-sm text-gray-700">
                                    Choose file
                                </span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* {successMessage && (
                    <div className="mb-6 p-4 rounded-[16px] bg-gradient-to-br from-green-400/10 to-emerald-400/10 border border-green-300/30">
                        <p className="text-sm text-green-700">
                            {successMessage}
                        </p>
                    </div>
                )} */}

                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 rounded-[16px] backdrop-blur-[20px] bg-white/60 border border-white/40 text-gray-700 hover:bg-white/80 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-8 py-3 rounded-[16px] bg-gradient-to-r from-green-400/40 to-emerald-400/40 hover:from-green-400/50 hover:to-emerald-400/50 backdrop-blur-[20px] border border-green-300/40 text-green-700 shadow-[0_4px_16px_rgba(34,197,94,0.2)] transition-all"
                    >
                        Create Retailer
                    </button>
                </div>
            </div>
        </div>
    );



}

export default CreateRetailer
