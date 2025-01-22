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
  icon: 'bi bi-chat-left-text',
  title: 'Reclamations',
  subtitle: '5'
},
{
  bgcolor: 'warning',
  icon: 'bi bi-person-circle fs-3',
  title: 'Clients Number',
  subtitle: ''
},
{
  bgcolor: 'info',
  icon: 'bi bi-person-circle fs-3',
  title: 'Agents Number',
  subtitle: ''
},
];
}
