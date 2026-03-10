import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboardlayout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboardlayout.html',
  styleUrl: './dashboardlayout.css',
})
export class Dashboardlayout {
  showUserMenu = signal(false);

  toggleUserMenu() {
    this.showUserMenu.update((prev) => !prev);
  }

  logout() {
    console.log('Logging out...');
  }
}
