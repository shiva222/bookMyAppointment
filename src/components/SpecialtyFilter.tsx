import { specialties } from '../mockData';
import { useStore } from '../store';

export function SpecialtyFilter() {
  const { selectedSpecialty, setSelectedSpecialty } = useStore();

  return (
    <div className="mb-6">
      <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Specialty
      </label>
      <select
        id="specialty"
        value={selectedSpecialty || ''}
        onChange={(e) => setSelectedSpecialty(e.target.value || null)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
      >
        <option value="">All Specialties</option>
        {specialties.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
    </div>
  );
}