import { RouterLink, RouterOutlet } from '@angular/router';

import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  correctCount = signal(20);
  totalQuestions = 25;

  correctPercentage = computed(() => (this.correctCount() / this.totalQuestions) * 100);
  incorrectCount = computed(() => this.totalQuestions - this.correctCount());

  userAnswers = signal([
    {
      question: 'What does CSS stand for?',
      selected: 'Computer Style Sheets',
      correct: 'Cascading Style Sheets',
    },
    {
      question: 'What does CSS stand for?',
      selected: 'Computer Style Sheets',
      correct: 'Cascading Style Sheets',
    },
    {
      question: 'What does CSS stand for?',
      selected: 'Computer Style Sheets',
      correct: 'Cascading Style Sheets',
    },
  ]);

  wrongQuestionsOnly = computed(() => this.userAnswers().filter((a) => a.selected !== a.correct));
}
