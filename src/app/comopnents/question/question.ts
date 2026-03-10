import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question implements OnInit, OnDestroy {
  currentQuestionIndex = signal(0);
  timeLeft = signal(781);
  timerInterval: any;
  questions = Array(25)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      text: 'What does CSS stand for?',
      options: [
        'Computer Style Sheets',
        'Creative Style Sheets',
        'Cascading Style Sheets',
        'Colorful Style Sheets',
      ],
      correctAnswer: 'Cascading Style Sheets',
    }));

  currentQuestion = computed(() => this.questions[this.currentQuestionIndex()]);

  formattedTime = computed(() => {
    const minutes = Math.floor(this.timeLeft() / 60);
    const seconds = this.timeLeft() % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update((t) => t - 1);
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update((i) => i + 1);
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update((i) => i - 1);
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
