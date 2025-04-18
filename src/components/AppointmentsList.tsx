import { useStore } from '../store';
import { format, parseISO } from 'date-fns';

export function AppointmentsList() {
  const { appointments, doctors } = useStore();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments scheduled yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appointments.map((appointment) => {
            const doctor = doctors.find((d) => d.id === appointment.doctorId);
            if (!doctor) return null;

            return (
              <div
                key={appointment.id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500">
                      {format(parseISO(appointment.dateTime), 'PPpp')}
                    </p>
                    <p className="text-sm text-gray-500">{doctor.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}