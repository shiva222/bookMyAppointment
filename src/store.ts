import { create } from 'zustand';
import { Doctor, Appointment } from './types';
import { mockDoctors } from './mockData';

interface AppState {
  doctors: Doctor[];
  appointments: Appointment[];
  selectedSpecialty: string | null;
  addAppointment: (appointment: Appointment) => void;
  setSelectedSpecialty: (specialty: string | null) => void;
  filteredDoctors: () => Doctor[];
}

export const useStore = create<AppState>((set, get) => ({
  doctors: mockDoctors,
  appointments: [],
  selectedSpecialty: null,
  addAppointment: (appointment) =>
    set((state) => {
      const updatedDoctors = state.doctors.map((doctor) => {
        if (doctor.id === appointment.doctorId) {
          return {
            ...doctor,
            availableSlots: doctor.availableSlots.filter(
              (slot) => slot !== appointment.dateTime
            ),
          };
        }
        return doctor;
      });

      return {
        appointments: [...state.appointments, appointment],
        doctors: updatedDoctors,
      };
    }),
  setSelectedSpecialty: (specialty) =>
    set({ selectedSpecialty: specialty }),
  filteredDoctors: () => {
    const { doctors, selectedSpecialty } = get();
    if (!selectedSpecialty) return doctors;
    return doctors.filter((doctor) => doctor.specialty === selectedSpecialty);
  },
}));
