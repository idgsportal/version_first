import { useState } from 'react';
import { ArrowLeft, Save, Send, Plus, Trash2 } from 'lucide-react';
import { FileUploadTile } from './FileUploadTile';
import { SuccessPopup } from '../../../ui/popups/SuccessPopup';
import { ErrorPopup } from '../../../ui/popups/ErrorPopup';

export function DomicileCertificateForm({ onBack }) {
    const [formData, setFormData] = useState({
        samagraId: '',
        name: '',
        fatherName: '',
        mobile: '',
        aadhar: '',
        address: '',
        pincode: '',
        district: 'Indore',
        tehsil: '',
        spouseName: '',
        age: '',
    });

    const [children, setChildren] = useState([]);

    const [uploads, setUploads] = useState({
        aadharFront: null,
        aadharBack: null,
        passportPhoto: null,
        declaration: null,
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const tehsilOptions = [
        'Indore',
        'Juni Indore',
        'Malharganj',
        'Mhow',
        'Rau',
        'Depalpur',
    ];

    const formatAadhar = (value) => {
        const numbers = value.replace(/\D/g, '');
        const parts = numbers.match(/.{1,4}/g);
        return parts ? parts.join(' ').substring(0, 14) : numbers;
    };

    const addChild = () => {
        setChildren([
            ...children,
            { id: Date.now().toString(), name: '', age: '', gender: '' },
        ]);
    };

    const updateChild = (id, field, value) => {
        setChildren(
            children.map((child) =>
                child.id === id ? { ...child, [field]: value } : child
            )
        );
    };

    const removeChild = (id) => {
        setChildren(children.filter((child) => child.id !== id));
    };

    const validateChildAge = (age) => {
        const ageNum = parseInt(age);
        if (ageNum > 17) {
            setErrorMessage('You cannot add children above age 17.');
            setShowError(true);
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        for (const child of children) {
            if (child.age && !validateChildAge(child.age)) return;
        }

        if (
            !uploads.aadharFront ||
            !uploads.aadharBack ||
            !uploads.passportPhoto ||
            !uploads.declaration
        ) {
            setErrorMessage('Please upload all required documents.');
            setShowError(true);
            return;
        }

        const walletBalance = 500;
        const servicePrice = 150;

        if (walletBalance < servicePrice) {
            setErrorMessage('Insufficient Balance. Form saved as Draft.');
            setShowError(true);
            return;
        }

        setShowSuccess(true);
    };

    return (
        <>
            <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                {/* Header */}
                <div className="p-6 border-b border-white/30 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-4 py-2 rounded-[16px] hover:bg-white/50 text-gray-700"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Services
                    </button>
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30 border border-emerald-400/40">
                        <span className="text-sm text-emerald-700">Amount: ₹150</span>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <h3 className="text-xl text-gray-800">
                        Domicile Certificate Application
                    </h3>

                    {/* Basic Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            ['Samagra ID', 'samagraId'],
                            ['Name', 'name'],
                            ['Father Name', 'fatherName'],
                            ['Mobile', 'mobile'],
                            ['Age', 'age'],
                        ].map(([label, key]) => (
                            <div key={key} className="space-y-2">
                                <label className="text-sm text-gray-600">{label}</label>
                                <input
                                    value={formData[key]}
                                    onChange={(e) =>
                                        setFormData({ ...formData, [key]: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-white/40 rounded-[18px] border border-white/50 shadow-inner"
                                />
                            </div>
                        ))}

                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Aadhar Number</label>
                            <input
                                value={formData.aadhar}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        aadhar: formatAadhar(e.target.value),
                                    })
                                }
                                className="w-full px-4 py-3 bg-white/40 rounded-[18px] border border-white/50 shadow-inner"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Spouse Name</label>
                            <input
                                value={formData.spouseName}
                                onChange={(e) =>
                                    setFormData({ ...formData, spouseName: e.target.value })
                                }
                                className="w-full px-4 py-3 bg-white/40 rounded-[18px] border border-white/50 shadow-inner"
                            />
                        </div>
                    </div>

                    {/* Children */}
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <h4 className="text-gray-800">Children Details</h4>
                            <button
                                onClick={addChild}
                                className="px-4 py-2 rounded-[16px] bg-gradient-to-r from-blue-400 to-purple-400 text-white flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" /> Add Child
                            </button>
                        </div>

                        {children.map((child) => (
                            <div key={child.id} className="bg-white/40 p-4 rounded-[18px]">
                                <div className="grid md:grid-cols-4 gap-4">
                                    <input
                                        placeholder="Name"
                                        value={child.name}
                                        onChange={(e) =>
                                            updateChild(child.id, 'name', e.target.value)
                                        }
                                        className="px-4 py-3 bg-white/40 rounded-[16px]"
                                    />
                                    <input
                                        placeholder="Age"
                                        value={child.age}
                                        onChange={(e) =>
                                            updateChild(child.id, 'age', e.target.value)
                                        }
                                        onBlur={(e) => validateChildAge(e.target.value)}
                                        className="px-4 py-3 bg-white/40 rounded-[16px]"
                                    />
                                    <select
                                        value={child.gender}
                                        onChange={(e) =>
                                            updateChild(child.id, 'gender', e.target.value)
                                        }
                                        className="px-4 py-3 bg-white/40 rounded-[16px]"
                                    >
                                        <option value="">Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <button
                                        onClick={() => removeChild(child.id)}
                                        className="bg-red-50 text-red-600 rounded-[16px]"
                                    >
                                        <Trash2 className="w-4 h-4 mx-auto" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Upload Section */}
                    <div className="space-y-4">
                        <h4 className="text-gray-800">Upload Documents</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <FileUploadTile
                                label="Aadhar Front *"
                                file={uploads.aadharFront}
                                onChange={(file) =>
                                    setUploads({ ...uploads, aadharFront: file })
                                }
                            />
                            <FileUploadTile
                                label="Aadhar Back *"
                                file={uploads.aadharBack}
                                onChange={(file) =>
                                    setUploads({ ...uploads, aadharBack: file })
                                }
                            />
                            <FileUploadTile
                                label="Passport Photo *"
                                file={uploads.passportPhoto}
                                onChange={(file) =>
                                    setUploads({ ...uploads, passportPhoto: file })
                                }
                            />
                            <FileUploadTile
                                label="Declaration *"
                                file={uploads.declaration}
                                onChange={(file) =>
                                    setUploads({ ...uploads, declaration: file })
                                }
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-6 py-3 rounded-[18px] bg-white/60 border">
                            <Save className="w-5 h-5 inline mr-2" />
                            Save Draft
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-[18px] bg-gradient-to-r from-emerald-400 to-teal-400 text-white"
                        >
                            <Send className="w-5 h-5 inline mr-2" />
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <SuccessPopup
                    message="Domicile Certificate Application Submitted Successfully!"
                    onClose={() => setShowSuccess(false)}
                />
            )}

            {showError && (
                <ErrorPopup
                    message={errorMessage}
                    onClose={() => setShowError(false)}
                />
            )}
        </>
    );
}
