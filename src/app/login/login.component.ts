import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  //Create FormGroup
//   loginForm!: FormGroup;
//   constructor(private fb: FormBuilder) {
//      this.myForm();
//   }

//   myForm() {
//     this.loginForm = this.fb.group({
//       email: ['', Validators.required ],
//     });
//  }
//  ngOnInit()
//  {

//  }

title_login = 'GİRİŞ YAP';
loginForm = new FormGroup({
  lemail: new FormControl('',[Validators.required,Validators.email]),
  lpassword: new FormControl('',[Validators.required])
})
loginUser(){
  console.warn(this.loginForm.value)
}
get lemail(){
  return this.loginForm.get('lemail');
}
get lpassword(){
  return this.loginForm.get('lpassword');
}
title_signup = 'KAYIT OL';
signupForm = new FormGroup({
   sname: new FormControl('',[Validators.required]),
   slastname: new FormControl('',[Validators.required]),
   semail: new FormControl('',[Validators.required,Validators.email]),
   spassword: new FormControl('',[Validators.required]),
   spasswordagain: new FormControl('',[Validators.required]),
   scontract: new FormControl(false,[Validators.requiredTrue])
})
get sname(){
  return this.signupForm.get('sname');
}
get slastname(){
  return this.signupForm.get('slastname');
}get semail(){
  return this.signupForm.get('semail');
}
get spassword(){
  return this.signupForm.get('spassword');
}get spasswordagain(){
  return this.signupForm.get('spasswordagain');
}
get scontract(){
  return this.signupForm.get('scontract');
}}
