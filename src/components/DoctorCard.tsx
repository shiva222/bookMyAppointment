import {Doctor} from '../types';
import {useState} from 'react';
import {BookingModal} from './BookingModal';

interface DoctorCardProps {
    doctor: Doctor;
}

export function DoctorCard({doctor}: DoctorCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4">
                <img src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} className="w-24 h-24 rounded-full object-cover" />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1">{doctor.rating}</span>
                    </div>
                    <p className="text-gray-500 mt-1">{doctor.location}</p>
                </div>
                <div className="flex items-center">
                    {doctor.availableSlots.length > 0 ? (
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            aria-label={`Book appointment with ${doctor.name}`}
                        >
                            Book Appointment
                        </button>
                    ) : (
                        <span className="text-red-600 font-semibold">No Availability</span>
                    )}
                </div>
            </div>
            <BookingModal doctor={doctor} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
