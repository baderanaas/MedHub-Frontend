import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-top-card',
  templateUrl: './doc-top-card.component.html',
  styleUrls: ['./doc-top-card.component.css']
})
export class DocTopCardComponent {
  ngOnInit(): void {
    console.log(this.topcard);
   }
  
   topcard=[{
    bgcolor: 'danger',
    icon: 'fa-solid fa-suitcase-medical',
    title: "Today's Appointments",
    subtitle: '2'
  },
  {
    bgcolor: 'danger',
    icon: 'fa-solid fa-suitcase-medical',
    title: "Today's Appointments",
    subtitle: '2'
  },
  {
    bgcolor: 'warning',
    icon: 'bi bi-person-circle fs-3',
    title: 'This Month Income',
    subtitle: '10000$'
  },
  {
    bgcolor: 'info',
    icon: 'bi bi-person-circle fs-3',
    title: 'Total Patient Number',
    subtitle: '800'
  },
  ];

}
