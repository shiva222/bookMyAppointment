import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { format, parseISO } from 'date-fns';
import { Doctor } from '../types';
import { useStore } from '../store';

interface BookingModalProps {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ doctor, isOpen, onClose }: BookingModalProps) {
  const addAppointment = useStore((state) => state.addAppointment);

  const handleBooking = (slot: string) => {
    addAppointment({
      id: crypto.randomUUID(),
      doctorId: doctor.id,
      dateTime: slot,
      status: 'confirmed',
    });
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Book Appointment with {doctor.name}
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Select an available time slot:
                  </p>
                  <div className="space-y-2">
                    {doctor.availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleBooking(slot)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        {format(parseISO(slot), 'PPpp')}
                      </button>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}