import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit{
 ngOnInit(): void {
  console.log(this.topcard);
 }

 topcard=[{
  bgcolor: 'danger',
  icon: 'fa-solid fa-suitcase-medical',
  title: 'Upcoming Appointments',
  subtitle: '2'
},
{
  bgcolor: 'warning',
  icon: 'bi bi-person-circle fs-3',
  title: 'Next Medications',
  subtitle: 'Heart pills'
},
{
  bgcolor: 'info',
  icon: 'bi bi-person-circle fs-3',
  title: 'Pending Payments',
  subtitle: 'Dr. Smith'
},
{
  bgcolor: 'info',
  icon: 'bi bi-person-circle fs-3',
  title: 'Emergency Contact Info',
  subtitle: '911'
},
];
}
