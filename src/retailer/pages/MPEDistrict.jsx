import { useState } from 'react';
import { MPEDistrictServices } from '../forms/mpedistrict/MPEDistrictServices';
import { IncomeCertificateForm } from '../forms/mpedistrict/IncomeCertificateForm';
import { DomicileCertificateForm } from '../forms/mpedistrict/DomicileCertificateForm';
import { BloodRelationCasteForm } from '../forms/mpedistrict/BloodRelationCasteForm';
import { ManualToDigitalCasteForm } from '../forms/mpedistrict/ManualToDigitalCasteForm';
import { DownloadCertificate } from '../forms/mpedistrict/DownloadCertificate';

export function MPEDistrict() {
    const [currentView, setCurrentView] = useState('services');

    return (
        <div className="space-y-6 p-3">
            {currentView === 'services' && (
                <MPEDistrictServices onServiceSelect={setCurrentView} />
            )}

            {currentView === 'income' && (
                <IncomeCertificateForm onBack={() => setCurrentView('services')} />
            )}

            {currentView === 'domicile' && (
                <DomicileCertificateForm onBack={() => setCurrentView('services')} />
            )}

            {currentView === 'blood-relation-caste' && (
                <BloodRelationCasteForm onBack={() => setCurrentView('services')} />
            )}

            {currentView === 'manual-to-digital-caste' && (
                <ManualToDigitalCasteForm onBack={() => setCurrentView('services')} />
            )}

            {currentView === 'download' && (
                <DownloadCertificate onBack={() => setCurrentView('services')} />
            )}
        </div>
    );
}
