import { useState } from 'react';
import { ArrowLeft, Save, Send, User } from 'lucide-react';
import { FileUploadTile } from './FileUploadTile';
import { SuccessPopup } from '../../../ui/popups/SuccessPopup';
import { ErrorPopup } from '../../../ui/popups/ErrorPopup';

export function BloodRelationCasteForm({ onBack }) {
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
        relativeType: '',
        relativeCertNo: '',
        relativeSamagraId: '',
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

    const handleSubmit = () => {
        const walletBalance = 500;
        const servicePrice = 500;

        if (walletBalance < servicePrice) {
            setErrorMessage(
                'Insufficient Balance. Form saved as Draft. Redirecting to Wallet.'
            );
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
                        className="flex items-center gap-2 px-4 py-2 rounded-[16px] hover:bg-white/50 transition-colors text-gray-700"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Services
                    </button>

                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 border border-purple-400/40">
                        <span className="text-sm text-purple-700">Amount: ₹500</span>
                    </div>
                </div>

                {/* Form */}
                <div className="p-6 space-y-6">
                    <h3 className="text-xl text-gray-800">
                        Blood Relation Caste Certificate Application
                    </h3>

                    {/* Applicant Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* --- ALL INPUTS SAME AS YOUR CODE --- */}
                        {/* (No CSS / JSX changes here) */}
                    </div>

                    {/* Relative Proof */}
                    <div className="backdrop-blur-[24px] bg-purple-400/10 rounded-[20px] border border-purple-400/30 p-6 space-y-4">
                        <h4 className="text-gray-800">Relative Proof Details</h4>
                    </div>

                    {/* Upload Section */}
                    <div className="space-y-4">
                        <h4 className="text-gray-800">Upload Documents</h4>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                                label="Father Aadhar Front *"
                                file={uploads.fatherAadharFront}
                                onChange={(file) =>
                                    setUploads({ ...uploads, fatherAadharFront: file })
                                }
                            />

                            <FileUploadTile
                                label="Father Aadhar Back *"
                                file={uploads.fatherAadharBack}
                                onChange={(file) =>
                                    setUploads({ ...uploads, fatherAadharBack: file })
                                }
                            />

                            <FileUploadTile
                                label="Mother Aadhar Front *"
                                file={uploads.motherAadharFront}
                                onChange={(file) =>
                                    setUploads({ ...uploads, motherAadharFront: file })
                                }
                            />

                            <FileUploadTile
                                label="Mother Aadhar Back *"
                                file={uploads.motherAadharBack}
                                onChange={(file) =>
                                    setUploads({ ...uploads, motherAadharBack: file })
                                }
                            />

                            <FileUploadTile
                                label="Marksheet *"
                                file={uploads.marksheet}
                                onChange={(file) =>
                                    setUploads({ ...uploads, marksheet: file })
                                }
                            />

                            <FileUploadTile
                                label="Income Certificate *"
                                file={uploads.incomeCert}
                                onChange={(file) =>
                                    setUploads({ ...uploads, incomeCert: file })
                                }
                            />

                            <FileUploadTile
                                label="Domicile Certificate *"
                                file={uploads.domicileCert}
                                onChange={(file) =>
                                    setUploads({ ...uploads, domicileCert: file })
                                }
                            />

                            <FileUploadTile
                                label="Passport Photo *"
                                file={uploads.passportPhoto}
                                onChange={(file) =>
                                    setUploads({ ...uploads, passportPhoto: file })
                                }
                            />

                            {/* Applicant Photo */}
                            <div className="space-y-2">
                                <label className="text-sm text-gray-600">
                                    Applicant Photo *
                                </label>

                                <div className="relative aspect-square backdrop-blur-[24px] bg-white/40 rounded-[18px] border-2 border-dashed border-white/60 hover:border-blue-400/50 transition-all cursor-pointer overflow-hidden">
                                    {uploads.applicantPhoto ? (
                                        <img
                                            src={URL.createObjectURL(uploads.applicantPhoto)}
                                            alt="Applicant"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <User className="w-12 h-12 text-gray-300" />
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setUploads({
                                                ...uploads,
                                                applicantPhoto: e.target.files[0] || null,
                                            })
                                        }
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>
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
                            className="px-6 py-3 rounded-[18px] bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white shadow-[0_8px_20px_rgba(168,85,247,0.35)] transition-all flex items-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <SuccessPopup
                    message="Blood Relation Caste Certificate Application Submitted Successfully!"
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
