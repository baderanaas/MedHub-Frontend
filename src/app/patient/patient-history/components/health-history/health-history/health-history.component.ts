import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-health-history',
  templateUrl: './health-history.component.html',
  styleUrls: ['./health-history.component.css']
})
export class HealthHistoryComponent {
  @Input() healthQuestions: { question: string; key: string; value?: string | null }[] = [];
  @Input() healthHistory: { [key: string]: string | null } = {};

  updateAnswer(question: any, answer: string) {
    question.value = answer;
  }
}
