import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgotpassword.html',
  styleUrl: './forgotpassword.css',
})
export class Forgotpassword {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Recovery email sent to:', this.forgotPasswordForm.value.email);

      this.router.navigate(['/auth/verify-otp']);
    } else {
      this.forgotPasswordForm.markAllAsTouched();
    }
  }
}
