import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, Upload } from "lucide-react";
import Input from '../../../ui/Input';
import TextArea from '../../../ui/TextArea';
import { toast } from '../../../ui/toast/ToastHelper';
import { createUser } from '../../../redux/actions/createUserAction';
import { useDispatch, useSelector } from 'react-redux';


function CreateRetailer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState('');
    const [confirmPassword, setConformPassword] = useState('');
    const [formData, setFormData] = useState({
        shopName: '',
        shopAddress: '',
        shopPincode: '',
        name: '',
        dob: '',
        mobile: '',
        email: '',
        aadhaar: '',
        pan: '',
        role: 'retailer',
        password: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.shopName || !formData.name || !formData.mobile) {
            toast.error("Please fill all required fields")
            return;
        }
        if (formData.password !== confirmPassword) {
            toast.error("Password not matched");
            return;
        }

        console.log(formData)
        const success = await dispatch(createUser(formData));

        if (success) {
            toast.success('Retailer created successfully!');
            setSuccessMessage("Retailer created successfully!")

        } else {
            toast.error(error || 'Failed to create Retailer');
            setSuccessMessage(error || 'Failed to create Retailer')
        }
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

                    <Input
                        label="Shop Name *"
                        value={formData.shopName}
                        placeholder={"Enter shop name"}
                        onChange={e => setFormData({ ...formData, shopName: e.target.value })}
                    />

                    <Input
                        label=" Retailer Name *"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter retailer name"
                    />

                    <TextArea
                        label="Shop Address *"
                        value={formData.shopAddress}
                        onChange={e => setFormData({ ...formData, shopAddress: e.target.value })}
                        placeholder={"Enter Shop Address"}
                    />
                    <Input
                        label="Shop Pincode *"
                        value={formData.shopPincode}
                        onChange={e => setFormData({ ...formData, shopPincode: e.target.value })}
                        placeholder="Enter Shop Pincode"
                    />

                    <Input
                        type="text"
                        label="Date of Birth *"
                        placeholder="DD/MM/YYYY"
                        value={formData.dob}
                        onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, ''); // sirf numbers

                            if (value.length > 8) value = value.slice(0, 8);

                            if (value.length > 4) {
                                value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
                            } else if (value.length > 2) {
                                value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
                            }
                            setFormData({ ...formData, dob: value });
                        }}
                        inputMode="numeric"
                    />


                    <Input
                        label="Mobile Number *"
                        value={formData.mobile}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ''); // sirf numbers
                            if (value.length <= 10) {
                                setFormData({ ...formData, mobile: value });
                            }
                        }}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Enter Mobile No."
                    />

                    <Input
                        label="Email ID *"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter Email Id"
                    />

                    <Input
                        label="Aadhaar Number *"
                        value={formData.aadhaar.replace(/(\d{4})(?=\d)/g, '$1 ')}
                        onChange={(e) => {
                            const rawValue = e.target.value.replace(/\D/g, ''); // only digits
                            if (rawValue.length <= 12) {
                                setFormData({
                                    ...formData,
                                    aadhaar: rawValue, // 🔥 stored WITHOUT spaces
                                });
                            }
                        }}
                        inputMode="numeric"
                        placeholder="0000 0000 0000"
                    />

                    <Input
                        label="PAN Number *"
                        value={formData.pan}
                        onChange={e => setFormData({ ...formData, pan: e.target.value })}
                        placeholder="Enter Pan Number"
                    />

                    <Input
                        label="Password *"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Enter Password"
                    />

                    <Input
                        label="Confirm Password*"
                        value={formData.confirmPassword}
                        onChange={(e) => setConformPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />

                </div>
                {successMessage && (
                    <div className="mb-6 p-4 rounded-[16px] bg-gradient-to-br from-green-400/10 to-emerald-400/10 border border-green-300/30">
                        <p className="text-sm text-green-700">
                            {successMessage}
                        </p>
                    </div>
                )}

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
