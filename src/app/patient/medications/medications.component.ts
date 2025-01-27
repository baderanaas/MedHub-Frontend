import { Component } from '@angular/core';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent {
  title = 'My Medications'; // Title for the table header

  // Sample medication data (can be replaced with real data from an API)
  Medications = [
    {
      name: 'Paracetamol',
      type: 'Tablet',
      dose: '500mg',
      perDay: '3 times',
      period: '5 days',
      description: 'For fever and mild pain'
    },
    {
      name: 'Amoxicillin',
      type: 'Capsule',
      dose: '250mg',
      perDay: '2 times',
      period: '7 days',
      description: 'Antibiotic for bacterial infection'
    }
  ];

  // Function to handle adding a new medication (to be implemented)
  openAddMedication(): void {
    console.log('Open Add Medication modal');
    // Logic to open a modal or form for adding new medication
  }

  // Function to handle status changes (e.g., In Progress or Done)
  onStatusChange(medication: any, status: string): void {
    if (status === 'inProgress') {
      console.log(`Status for ${medication.name} set to In Progress`);
      // Logic for updating status to "In Progress"
    } else if (status === 'done') {
      console.log(`Status for ${medication.name} set to Done`);
      // Logic for updating status to "Done"
    }
  }
}
