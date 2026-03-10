import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  activeTab = signal<'profile' | 'password'>('profile');

  // user data
  userProfile = {
    firstName: 'fryal',
    lastName: 'mohamed',
    username: 'user123',
    email: 'user@example.com',
    phone: '1012345678',
  };

  setTab(tabName: 'profile' | 'password') {
    this.activeTab.set(tabName);
  }

  saveChanges() {
    console.log('Data Saved:', this.userProfile);
    alert('data saved successfully');
  }

  logout() {
    console.log('Logging out...');
  }

  showDeleteModal = signal(false);

  openModal() {
    this.showDeleteModal.set(true);
  }

  closeModal() {
    this.showDeleteModal.set(false);
  }

  confirmDelete() {
    console.log('Account Deleted');
    // delete account
    this.closeModal();
  }

  // error

  errorMessage = signal<string | null>(null);

  newPassword = '';
  confirmPassword = '';

  updatePassword() {
    if (!this.newPassword || !this.confirmPassword) {
      this.errorMessage.set('Something went wrong');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage.set('Passwords do not match');
      return;
    }

    this.errorMessage.set(null);
    console.log('Password updated successfully!');
  }
}
