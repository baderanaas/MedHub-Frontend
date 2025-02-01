import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionLabelPipe } from '../pipes/session-label.pipe';



@NgModule({
  declarations: [SessionLabelPipe],
  imports: [
    CommonModule
  ],
  exports:[SessionLabelPipe]
})
export class CommModule { }
