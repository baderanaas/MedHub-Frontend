import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/patient/patient-appointments/interfaces/appointment';
import { CommModule } from 'src/app/shared/comm/comm.module';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todays-appointments',
  templateUrl: './todays-appointments.component.html',
  styleUrls: ['./todays-appointments.component.css'],
 
})
export class TodaysAppointmentsComponent implements OnInit {
  title = "Today's Appointments";
  todayAppointments: any[]=[];
  ngOnInit(): void {
    this.fetchDoctorTodayAppointments();
  }
  constructor( private appointmentService :DataService){}
  upcomingAppointments:any[] = [];

  requestedAppointments = [
    { patientName: 'John Doe', date: '2025-01-29', time: '10:00 AM' },
    { patientName: 'Jane Smith', date: '2025-01-29', time: '11:30 AM' },
    { patientName: 'Alice Johnson', date: '2025-01-30', time: '02:15 PM' },
    { patientName: 'Bob Williams', date: '2025-01-31', time: '09:00 AM' },
    { patientName: 'Charlie Brown', date: '2025-02-01', time: '12:45 PM' },
    { patientName: 'Eve Davis', date: '2025-02-01', time: '03:00 PM' },
  ];

  pageSize = 2;
  currentPage = 0;

  selectedRequestIndex: number | null = null;

  get paginatedAppointments() {
    const startIndex = this.currentPage * this.pageSize;
    return this.requestedAppointments.slice(startIndex, startIndex + this.pageSize);
  }

  get isFirstPage() {
    return this.currentPage === 0;
  }

  get isLastPage() {
    return (this.currentPage + 1) * this.pageSize >= this.requestedAppointments.length;
  }

  nextPage() {
    if (!this.isLastPage) {
      this.currentPage++;
      this.selectedRequestIndex = null;
    }
  }

  previousPage() {
    if (!this.isFirstPage) {
      this.currentPage--;
      this.selectedRequestIndex = null;
    }
  }

  selectRequest(index: number) {
    this.selectedRequestIndex = this.selectedRequestIndex === index ? null : index;
  }

  onAccept(request: any, event: MouseEvent) {
    event.stopPropagation();
    alert(`Appointment with ${request.patientName} accepted.`);
    this.removeRequest(request);
  }

  onReject(request: any, event: MouseEvent) {
    event.stopPropagation();
    alert(`Appointment with ${request.patientName} rejected.`);
    this.removeRequest(request);
  }

  removeRequest(request: any) {
    this.requestedAppointments = this.requestedAppointments.filter(r => r !== request);
    this.selectedRequestIndex = null;
  }

  onActionSelected(appointment: any, action: string) {
    console.log(`Action "${action}" selected for:`, appointment);
    // Implement functionality for view profile, reschedule, or cancel here
  }

  onAddAppointment() {
    console.log('Add Appointment button clicked');
    // Implement "Add Appointment" logic
  }


  fetchDoctorTodayAppointments(): void {
    this.appointmentService.getDoctorTodayAppointments().subscribe({
      next: (data) => {
        console.log("mala 3icha kalba");
        this.todayAppointments = data;
      },
      error: (error) => {
        console.error('Error fetching today\'s appointments:', error);
        this.todayAppointments = [];
      }
    });
  }

}
