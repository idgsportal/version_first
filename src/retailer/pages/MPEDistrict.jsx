import { useEffect, useState } from 'react';
import { MPEDistrictServices } from '../forms/mpedistrict/MPEDistrictServices';
import { IncomeCertificateForm } from '../forms/mpedistrict/IncomeCertificateForm';
import { DomicileCertificateForm } from '../forms/mpedistrict/DomicileCertificateForm';
import { BloodRelationCasteForm } from '../forms/mpedistrict/BloodRelationCasteForm';
import { ManualToDigitalCasteForm } from '../forms/mpedistrict/ManualToDigitalCasteForm';
import { DownloadCertificate } from '../forms/mpedistrict/DownloadCertificate';
import axios from "../../helper/axios";

export function MPEDistrict() {
    const [currentView, setCurrentView] = useState('services');
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get('/api/services');
                console.log(res.data.services)

                // sirf MP eDistrict services
                const mpServices = res.data.services.filter(
                    (s) => s.isMPEdistrict === true
                );

                setServices(mpServices);
            } catch (error) {
                console.error('Failed to load services', error);
            }
        };

        fetchServices();
    }, []);

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setCurrentView(service.serviceType);
    };
    return (
        <div className="space-y-6 p-3">
            {currentView === 'services' && (
                <MPEDistrictServices
                    services={services}
                    onServiceSelect={handleServiceSelect}
                />
            )}

            {currentView === 'income_certificate' && selectedService && (
                <IncomeCertificateForm
                    serviceId={selectedService._id}
                    onBack={() => setCurrentView('services')}
                />
            )}

            {currentView === 'domicile_certificate' && selectedService && (
                <DomicileCertificateForm
                    serviceId={selectedService._id}
                    onBack={() => setCurrentView('services')}
                />
            )}

            {currentView === 'blood_relation_caste' && selectedService && (
                <BloodRelationCasteForm
                    serviceId={selectedService._id}
                    onBack={() => setCurrentView('services')}
                />
            )}

            {currentView === 'manual_to_digital_caste' && selectedService && (
                <ManualToDigitalCasteForm
                    serviceId={selectedService._id}
                    onBack={() => setCurrentView('services')}
                />
            )}

            {currentView === 'download' && (
                <DownloadCertificate onBack={() => setCurrentView('services')} />
            )}
        </div>
    );

}
