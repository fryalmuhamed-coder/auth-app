import { Routes } from '@angular/router';
import { AuthLayout } from './comopnents/layouts/auth-layout/auth-layout';
import { Login } from './comopnents/login/login';
import { Register } from './comopnents/register/register';
import { VerifyOTP } from './comopnents/verify-otp/verify-otp';
import { Forgotpassword } from './comopnents/forgotpassword/forgotpassword';
import { Resetpassword } from './comopnents/resetpassword/resetpassword';
import { Creatpassword } from './comopnents/creatpassword/creatpassword';
import { Dashboardlayout } from './comopnents/dashboardlayout/dashboardlayout';
import { Diblomas } from './comopnents/diblomas/diblomas';
import { Component } from '@angular/core';
import { Exam } from './comopnents/exam/exam';
import { Question } from './comopnents/question/question';
import { Result } from './comopnents/result/result';
import { Account } from './comopnents/account/account';
export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login, title: 'Login' },
      { path: 'register', component: Register, title: 'Register' },
      { path: 'VerifyOTP', component: VerifyOTP, title: 'Verify OTP' },
      { path: 'forgotpassword', component: Forgotpassword, title: 'Forgot Password' },
      { path: 'Resetpassword', component: Resetpassword, title: 'Reset Password' },
      { path: 'creatpassword', component: Creatpassword, title: 'Create Password' },
    ],
  },
  {
    path: 'dashboard',
    component: Dashboardlayout,
    children: [
      { path: 'diblomas', component: Diblomas, title: 'Diplomas' },
      { path: 'exams', component: Exam, title: 'Exams' },
      { path: 'questions', component: Question, title: 'Questions' }, 
      {path:'result',component:Result,title:'Result'},
      {path:'account',component:Account,title:'account'},
      { path: '', redirectTo: 'diblomas', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];