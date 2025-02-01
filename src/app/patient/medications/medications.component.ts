import { Component, inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css'],
})
export class MedicationsComponent implements OnInit {
  ngOnInit(): void {
    this.medications$.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  reset() {
    throw new Error('Method not implemented.');
  }
  search() {
    throw new Error('Method not implemented.');
  }
  data = inject(DataService);
  medications$ = this.data.getMedications();
  name: any;
}
