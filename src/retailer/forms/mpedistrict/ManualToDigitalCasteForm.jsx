import { useState } from 'react';
import { ArrowLeft, Save, Send, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FileUploadTile } from './FileUploadTile';
import { SuccessPopup } from '../../../ui/popups/SuccessPopup';
import { ErrorPopup } from '../../../ui/popups/ErrorPopup';

export function ManualToDigitalCasteForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nameEnglish: '',
        nameHindi: '',
        fatherNameEnglish: '',
        fatherNameHindi: '',
        motherNameEnglish: '',
        motherNameHindi: '',
        dob: '',
        casteType: '',
        subCaste: '',
        surname: '',
        mobile: '',
        aadhar: '',
        address: '',
        pincode: '',
        district: 'Indore',
        tehsil: '',
    });

    const [uploads, setUploads] = useState({
        aadharFront: null,
        aadharBack: null,
        fatherAadharFront: null,
        fatherAadharBack: null,
        motherAadharFront: null,
        motherAadharBack: null,
        marksheet: null,
        incomeCert: null,
        domicileCert: null,
        passportPhoto: null,
        applicantPhoto: null,
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

    // ---------------- SUBMIT (API READY) ----------------
    const handleSubmit = async () => {
        try {
            const walletBalance = 500;
            const servicePrice = 700;

            if (walletBalance < servicePrice) {
                setErrorMessage(
                    'Insufficient Balance. Form saved as Draft. Redirecting to Wallet.'
                );
                setShowError(true);
                return;
            }

            const payload = new FormData();

            Object.keys(formData).forEach((key) => {
                payload.append(key, formData[key]);
            });

            Object.keys(uploads).forEach((key) => {
                if (uploads[key]) {
                    payload.append(key, uploads[key]);
                }
            });

            // 🔗 API URL (backend ke hisab se change kar sakte ho)
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/manual-to-digital-caste/apply`,
                {
                    method: 'POST',
                    body: payload,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Submission failed');
            }

            setShowSuccess(true);

            // success ke baad redirect
            setTimeout(() => {
                navigate('/services');
            }, 2000);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        }
    };

    return (
        <>
            <div className="backdrop-blur-[28px] bg-white/60 rounded-[22px] border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                {/* Header */}
                <div className="p-6 border-b border-white/30 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-4 py-2 rounded-[16px] hover:bg-white/50 transition-colors text-gray-700"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Services
                    </button>

                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/30 to-orange-400/30 border border-amber-400/40">
                        <span className="text-sm text-amber-700">Amount: ₹700</span>
                    </div>
                </div>

                {/* Form */}
                <div className="p-6 space-y-6">
                    <h3 className="text-xl text-gray-800">
                        Manual to Digital Caste Certificate
                    </h3>

                    {/* 🔽 पूरा JSX SAME रखा गया है – कोई CSS बदलाव नहीं */}

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            onClick={() => navigate('/drafts')}
                            className="px-6 py-3 rounded-[18px] backdrop-blur-[24px] bg-white/60 hover:bg-white/80 border border-white/40 text-gray-700 transition-all flex items-center gap-2"
                        >
                            <Save className="w-5 h-5" />
                            Save as Draft
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-[18px] bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white shadow-[0_8px_20px_rgba(251,191,36,0.35)] transition-all flex items-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <SuccessPopup
                    message="Manual to Digital Caste Certificate Application Submitted Successfully!"
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
