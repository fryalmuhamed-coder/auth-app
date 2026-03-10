import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {  
showPassword: boolean = false;
 loginForm : FormGroup = new FormGroup({
   userName: new FormControl('', [Validators.required, Validators.minLength(9)]),
   password: new FormControl('', [Validators.required, Validators.minLength(6)])
 })

 constructor(private router: Router) {}
   togglePassword() { this.showPassword = !this.showPassword; }
 
 onLogin() {
   if(this.loginForm.valid){
     this.router.navigate(['/dashboard/diblomas']);
   }
 }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("  data login", this.loginForm.value);
    
    } else {
      this.loginForm.markAllAsTouched(); 
    }
  }


}