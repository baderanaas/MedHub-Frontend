import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-popup',
  templateUrl: './quotes-popup.component.html',
  styleUrls: ['./quotes-popup.component.css'],
})
export class QuotesPopupComponent implements OnInit {
  quotes: string[] = [
    "Wash your hands frequently with soap and water for at least 20 seconds.",
    "Eat a balanced diet with plenty of fruits, vegetables, and whole grains.",
    "Get regular exercise, aiming for at least 30 minutes of moderate-intensity activity most days of the week.",
    "Maintain a healthy weight.",
    "Don't smoke.",
    "Limit alcohol consumption.",
    "Get enough sleep.",
    "Manage stress.",
    "Protect yourself from the sun.",
    "Get regular checkups and screenings.",
    "Vaccinate yourself and your children.",
    "Manage chronic conditions.",
    "Avoid risky behaviors.",
    "Take care of your mental health.",
  ];
  currentQuote: string = '';

  ngOnInit(): void {
    this.currentQuote = this.quotes[0];
    this.startQuoteRotation();
  }

  startQuoteRotation(): void {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % this.quotes.length; // Loop through quotes
      this.currentQuote = this.quotes[index];
    }, 5000); // Change every 5 seconds
  }
}
