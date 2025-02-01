import { Component } from '@angular/core';
import { PatientHistoryModule } from './patient-history.module';
@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  healthQuestions: { question: string; key: string; value?: string | null }[] = [
    { question: "Do you have diabetes?", key: "diabetes" },
    { question: "High blood pressure?", key: "bloodPressure" },
    { question: "High cholesterol?", key: "cholesterol" }
  ];

  healthHistory = {
    diabetes: null,
    bloodPressure: null,
    cholesterol: null,
  };
  smokingOptions = [
    { value: 'Never', label: 'Never' },
    { value: 'Yes', label: 'Yes' },
    { value: 'Quit', label: 'Quit' }
  ];

  vapingOptions = [ // Options pour le vapotage
    { value: 'No', label: 'No' },
    { value: 'Yes', label: 'Yes' }
  ];

  alcoholOptions = [ // Options pour l'alcool
    { value: 'No', label: 'No' },
    { value: 'Yes', label: 'Yes' }
  ];
  drugOptions = [
    { value: 'Rarely', label: 'Rarely' },
    { value: 'Opioids', label: 'Opioids' },
    { value: 'Never', label: 'Never' },
    { value: 'Marijuana', label: 'Marijuana' },
    { value: 'Cocaine', label: 'Cocaine' },
    { value: 'Other', label: 'Other' }
  ]
}

