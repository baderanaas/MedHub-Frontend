import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-history',
  templateUrl: './social-history.component.html',
  styleUrls: ['./social-history.component.css']
})
export class SocialHistoryComponent {
  @Input() smokingOptions: { value: string; label: string }[] = [];
  @Input() vapingOptions: { value: string; label: string }[] = []; 
  @Input() alcoholOptions: { value: string; label: string }[] = []; 
  @Input() drugOptions: { value: string; label: string }[] = [];

  // État pour les drogues (checkboxes)
  selectedDrugs: string[] = [];

  // Fréquence des drogues
  drugFrequency: string = '';
  
  // Méthode pour sélectionner toutes les drogues
  selectAllDrugs() {
    this.selectedDrugs = this.drugOptions.map(option => option.value);
  }

  // Méthode pour gérer la sélection/désélection des drogues
  toggleDrugSelection(drug: string) {
    const index = this.selectedDrugs.indexOf(drug);
    if (index > -1) {
      this.selectedDrugs.splice(index, 1);
    } else {
      this.selectedDrugs.push(drug);
    }
  }
}

