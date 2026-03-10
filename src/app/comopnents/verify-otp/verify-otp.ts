import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOTP {
  otpForm = new FormGroup({});

  onlyNumbers(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  moveFocus(event: any, index: number) {
    const inputs = document.querySelectorAll('input');
    if (event.key !== 'Backspace' && event.target.value && index < 5) {
      (inputs[index + 1] as HTMLInputElement).focus();
    } else if (event.key === 'Backspace' && index > 0) {
      (inputs[index - 1] as HTMLInputElement).focus();
    }
  }

  onVerify() {
    console.log('Verifying code...');
  }
}
