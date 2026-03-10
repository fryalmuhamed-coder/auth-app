
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-creatpassword',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './creatpassword.html',
  styleUrl: './creatpassword.css',
})
export class Creatpassword {

  showNewPassword = false;
  showConfirmPassword = false;

  resetForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) {}

  toggleNewPassword() { this.showNewPassword = !this.showNewPassword; }
  toggleConfirmPassword() { this.showConfirmPassword = !this.showConfirmPassword; }

  onSubmit() {
    if (this.resetForm.valid) {
      console.log('Password updated!');
      this.router.navigate(['/auth/login']); 
    }
  }
}
