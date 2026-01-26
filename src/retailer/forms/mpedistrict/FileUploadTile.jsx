import { Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';

export function FileUploadTile({ label, file, onChange, optional }) {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            onChange(selectedFile);

            // Image preview
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    };

    const handleRemove = () => {
        onChange(null);
        setPreview(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-2">
            <label className="text-sm text-gray-600">{label}</label>

            <div
                onClick={() => !file && fileInputRef.current?.click()}
                className={`relative aspect-square backdrop-blur-[24px] bg-white/40 rounded-[18px] border-2 border-dashed ${file
                        ? 'border-emerald-400/50'
                        : 'border-white/60 hover:border-blue-400/50'
                    } transition-all cursor-pointer overflow-hidden`}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {preview ? (
                    <>
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove();
                            }}
                            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </>
                ) : file ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <div className="text-center">
                            <p className="text-sm text-gray-700 break-all">
                                {file.name}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove();
                                }}
                                className="mt-2 text-xs text-red-600 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4 text-center">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <p className="text-xs text-gray-600">Click to upload</p>
                        {optional && (
                            <p className="text-xs text-gray-400">(Optional)</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
