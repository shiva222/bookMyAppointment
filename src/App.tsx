import { DoctorCard } from './components/DoctorCard';
import { SpecialtyFilter } from './components/SpecialtyFilter';
import { AppointmentsList } from './components/AppointmentsList';
import { useStore } from './store';

function App() {
  const filteredDoctors = useStore((state) => state.filteredDoctors());

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Find a Doctor</h1>
        
        <SpecialtyFilter />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <AppointmentsList />
      </div>
    </div>
  );
}

export default App;