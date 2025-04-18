export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  imageUrl: string;
  availableSlots: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  dateTime: string;
  status: 'confirmed' | 'cancelled';
}

export type Specialty = 'Cardiology' | 'Dermatology' | 'Family Medicine' | 'Neurology' | 'Pediatrics';