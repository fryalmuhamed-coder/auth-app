
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diblomas',
  imports: [CommonModule, RouterLink],
  templateUrl: './diblomas.html',
  styleUrl: './diblomas.css',
})
export class Diblomas {
  diplomas = [
    { id: 'flutter', title: 'Flutter Development', image: 'images/1.png' }, 
    { id: 'ai', title: 'AI & ML Development', image: 'images/2.png' },
    { id: 'backend', title: 'Back-End Web Development', image: 'images/3.png' },
    { id: 'data', title: 'Data Analysis', image: 'images/4.jpg' },
    { id: 'testing', title: 'Software Testing', image: 'images/5.jpg' },
    { id: 'cyber', title: 'Cyber Security', image: 'images/6.png' }
  ];
}
