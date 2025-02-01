import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PatientHistoryComponent } from './patient-history.component';
import { HealthHistoryComponent } from './components/health-history/health-history/health-history.component';
import { SocialHistoryComponent } from './components/social-history/social-history/social-history.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PersonalDetailsComponent } from './components/personal-details/personal-details/personal-details.component';
import { SurgicalHistoryComponent } from './components/Surgical-History/surgical-history/surgical-history.component';

@NgModule({
  declarations: [
    PatientHistoryComponent,
    HealthHistoryComponent,
    SocialHistoryComponent,
    PersonalDetailsComponent,
    SurgicalHistoryComponent,

  
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatCheckboxModule
  ],

})
export class PatientHistoryModule {}
