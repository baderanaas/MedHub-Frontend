import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-notes',
  templateUrl: './doc-notes.component.html',
  styleUrls: ['./doc-notes.component.css'],
})
export class DocNotesComponent {
  doctor = {
    name: 'Dr. HOUAIDA MANGOUR',
    speciality: 'Médecine Générale',
  }; // Exemple statique pour le docteur

  patient = {
    name: 'Monsieur Jihed Ben Amara',
    birthDate: '16/04/2002',
  }; // Exemple statique pour le patient

  content = ''; // Contenu de la note
  today = new Date(); // Date actuelle

  save() {
    if (this.content.trim() === '') {
      alert('Veuillez écrire quelque chose avant d\'enregistrer.');
    } else {
      console.log('Note enregistrée :', this.content);
      alert('Note enregistrée avec succès !');
      this.content = ''; // Réinitialise le champ après l'enregistrement
    }
  }
}
