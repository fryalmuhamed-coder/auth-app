import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam',
  imports: [CommonModule,RouterLink],
  templateUrl: './exam.html',
  styleUrl: './exam.css',
})
export class Exam {
  exams = [
    { title: 'CSS Quiz', questions: 25, duration: 20 },
    { title: 'Bootstrap Quiz', questions: 25, duration: 20 },
    { title: 'Tailwind Quiz', questions: 25, duration: 20 },
    { title: 'React Quiz', questions: 25, duration: 20 }
  ];
}
