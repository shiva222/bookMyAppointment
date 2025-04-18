import { Doctor, Specialty } from './types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: 4.8,
    location: 'New York, NY',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    availableSlots: ['2024-02-10T09:00:00', '2024-02-10T10:00:00', '2024-02-10T14:00:00'],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Dermatology',
    rating: 4.9,
    location: 'San Francisco, CA',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    availableSlots: ['2024-02-11T11:00:00', '2024-02-11T13:00:00', '2024-02-11T15:00:00'],
  },
  {
    id: '3',
    name: 'Dr. Emily Martinez',
    specialty: 'Pediatrics',
    rating: 4.7,
    location: 'Chicago, IL',
    imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    availableSlots: ['2024-02-12T09:30:00', '2024-02-12T10:30:00', '2024-02-12T14:30:00'],
  },
  {
    id: '4',
    name: 'Dr. David Patel',
    specialty: 'Neurology',
    rating: 4.6,
    location: 'Austin, TX',
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    availableSlots: ['2024-02-13T08:00:00', '2024-02-13T09:30:00', '2024-02-13T11:00:00'],
  },
  {
    id: '5',
    name: 'Dr. Olivia Brown',
    specialty: 'Family Medicine',
    rating: 4.9,
    location: 'Seattle, WA',
    imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    availableSlots: ['2024-02-14T10:00:00', '2024-02-14T13:00:00', '2024-02-14T16:00:00'],
  },
  {
    id: '6',
    name: 'Dr. James Wilson',
    specialty: 'Cardiology',
    rating: 4.5,
    location: 'Boston, MA',
    imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    availableSlots: ['2024-02-15T08:00:00', '2024-02-15T10:00:00', '2024-02-15T12:00:00'],
  },
  {
    id: '7',
    name: 'Dr. Ava Singh',
    specialty: 'Dermatology',
    rating: 4.8,
    location: 'Denver, CO',
    imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
    availableSlots: ['2024-02-16T09:00:00', '2024-02-16T11:00:00', '2024-02-16T14:00:00'],
  },
  {
    id: '8',
    name: 'Dr. Noah Garcia',
    specialty: 'Neurology',
    rating: 4.4,
    location: 'Miami, FL',
    imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
    availableSlots: ['2024-02-17T08:30:00', '2024-02-17T10:30:00', '2024-02-17T13:30:00'],
  },
  {
    id: '9',
    name: 'Dr. Mia Lee',
    specialty: 'Pediatrics',
    rating: 4.6,
    location: 'Los Angeles, CA',
    imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
    availableSlots: ['2024-02-18T09:15:00', '2024-02-18T11:45:00', '2024-02-18T15:00:00'],
  },
  {
    id: '10',
    name: 'Dr. Ethan Kim',
    specialty: 'Family Medicine',
    rating: 4.7,
    location: 'Atlanta, GA',
    imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
    availableSlots: ['2024-02-19T07:30:00', '2024-02-19T09:00:00', '2024-02-19T12:00:00'],
  },
];

export const specialties: Specialty[] = [
  'Cardiology',
  'Dermatology',
  'Family Medicine',
  'Neurology',
  'Pediatrics',
];
