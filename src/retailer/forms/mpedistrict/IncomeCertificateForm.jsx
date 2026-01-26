import { useState } from 'react';
import { ArrowLeft, Save, Send } from 'lucide-react';
import { FileUploadTile } from './FileUploadTile';
import { SuccessPopup } from '../../../ui/popups/SuccessPopup';
import { ErrorPopup } from '../../../ui/popups/ErrorPopup';

export function IncomeCertificateForm({ onBack }) {
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
        incomeAmount: '',
    });

    const [uploads, setUploads] = useState({
        aadharFront: null,
        aadharBack: null,
        declaration: null,
        itr: null,
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

    const formatIncome = (value) => {
        const numbers = value.replace(/\D/g, '');
        return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const numberToHindi = (num) => {
        if (num === 150000) return 'एक लाख पचास हजार रुपये';
        if (num === 100000) return 'एक लाख रुपये';
        if (num === 200000) return 'दो लाख रुपये';
        return '';
    };

    const handleSubmit = () => {
        const walletBalance = 500;
        const servicePrice = 120;

        if (walletBalance < servicePrice) {
            setErrorMessage(
                'Insufficient Balance. Form saved as Draft. Redirecting to Wallet.'
            );
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
                // redirect to wallet later
            }, 3000);

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
                        className="flex items-center gap-2 px-4 py-2 rounded-[16px] hover:bg-white/50 transition-colors text-gray-700"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Services
                    </button>

                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 border border-blue-400/40">
                        <span className="text-sm text-blue-700">Amount: ₹120</span>
                    </div>
                </div>

                {/* Form */}
                <div className="p-6 space-y-6">
                    <h3 className="text-xl text-gray-800">
                        Income Certificate Application
                    </h3>

                    {/* Identity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Samagra ID *</label>
                            <input
                                type="text"
                                maxLength={9}
                                value={formData.samagraId}
                                onChange={(e) =>
                                    setFormData({ ...formData, samagraId: e.target.value })
                                }
                                placeholder="9 digits required"
                                className="w-full px-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Name *</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="Enter full name"
                                className="w-full px-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Father Name *</label>
                            <input
                                type="text"
                                value={formData.fatherName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fatherName: e.target.value })
                                }
                                placeholder="Enter father name"
                                className="w-full px-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Mobile Number *</label>
                            <input
                                type="text"
                                maxLength={10}
                                value={formData.mobile}
                                onChange={(e) =>
                                    setFormData({ ...formData, mobile: e.target.value })
                                }
                                placeholder="10 digits required"
                                className="w-full px-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Aadhar Number *</label>
                            <input
                                type="text"
                                value={formData.aadhar}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        aadhar: formatAadhar(e.target.value),
                                    })
                                }
                                placeholder="XXXX XXXX XXXX"
                                className="w-full px-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">Address *</label>
                            <textarea
                                rows={3}
                                value={formData.address}
                                onChange={(e) =>
                                    setFormData({ ...formData, address: e.target.value })
                                }
                                placeholder="No special characters allowed"
                                className="w-full px-4 py-3 bg-white/40 backdrop-blur-[16px] rounded-[18px] border border-white/50 shadow-inner text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-300 transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* Uploads */}
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
                                label="Declaration Form *"
                                file={uploads.declaration}
                                onChange={(file) =>
                                    setUploads({ ...uploads, declaration: file })
                                }
                            />

                            <FileUploadTile
                                label="ITR (if income > 2 lakh)"
                                file={uploads.itr}
                                optional
                                onChange={(file) =>
                                    setUploads({ ...uploads, itr: file })
                                }
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button className="px-6 py-3 rounded-[18px] backdrop-blur-[24px] bg-white/60 hover:bg-white/80 border border-white/40 text-gray-700 transition-all flex items-center gap-2">
                            <Save className="w-5 h-5" />
                            Save as Draft
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-[18px] bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_8px_20px_rgba(96,165,250,0.35)] transition-all flex items-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <SuccessPopup
                    message="Income Certificate Application Submitted Successfully!"
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
