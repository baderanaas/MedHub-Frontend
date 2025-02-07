export const Api_Urls = {
  login: 'http://localhost:3000/auth/login',
  register: 'http://localhost:3000/auth/register',
  getDoctors: 'http://localhost:3000/doctor',
  getDoctorAppointmentsByName: 'http://localhost:3000/appointment/doctor',
  getPateintAppointments: 'http://localhost:3000/appointment/patient',
  getPateintRequests: 'http://localhost:3000/appointment/patient/requests',
  addAppointment: 'http://localhost:3000/appointment',
  getAvailableSessions: 'http://localhost:3000/appointment/availableSessions',
  getPassedAppointement: 'http://localhost:3000/appointment/patient',
  getUpcommingAppointment: 'http://localhost:3000/appointment/patient/upcoming',
  getPatientByUsername: 'http://localhost:3000/patient',
  getDoctorByMatricule: 'http://localhost:3000/doctor',

  getMedications: 'http://localhost:3000/medication',
  getPatientNextAppointment: 'http://localhost:3000/appointment/patient/next',
  getPatientNotPayed: 'http://localhost:3000/appointment/patient/notpayed',
  getPatientUpcoming: 'http://localhost:3000/appointment/patient/upcoming',
  getPatientNextWeekUpcoming:
    'http://localhost:3000/appointment/patient/next-week',
  getPatientUpcomingNumber:
    'http://localhost:3000/appointment/patient/upcomingNumber',

  getDoctorUpcommingAppointment:
    'http://localhost:3000/appointment/doctor/upcoming',
  getDoctorTodaysAppointment: 'http://localhost:3000/appointment/doctor/today',
  getDoctorRequestedAppointment:
    'http://localhost:3000/appointment/doctor/requested',
  updateAppointment: 'http://localhost:3000/appointment',
  getDoctorByUsername: 'http://localhost:3000/doctor/username',
  getUpcomingDoctorAppointments:
    'http://localhost:3000/appointment/doctor/upcoming',
  getDoctorPassedAppointement:
    'http://localhost:3000/appointment/doctor/passed',

  getDoctorPatients: 'http://localhost:3000/patient/completed/doctor',
  getDoctorPatientCompletedAppointments:
    'http://localhost:3000/appointment/completedappointments/doctor',
  getPatientMedications: 'http://localhost:3000/medication/patient',
  addMedication: 'http://localhost:3000/patient/medication',
  reschedule:'http://localhost:3000/appointment/reschedule',
};
