import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  constructor(private formBuilder: FormBuilder){}
  private _loginEmail : string="";
  private _loginPassword : string="";
  private _signupName : string="";
  private _signupLastname : string="";
  private _signupEmail : string="";
  private _signupPassword : string="";
  private _signupPasswordAgain : string="";
  isTrue:boolean=false;

  get loginEmail():string{
    return this._loginEmail;
  }
  set loginEmail(val:string){
    this._loginEmail=val;
  }

  get loginPassword():string{
    return this._loginPassword;
  }
  set loginPassword(val:string){
    this._loginPassword=val;
  }

  get signupName():string{
    return this._signupName;
  }
  set signupName(val:string){
    this._signupName=val;
  }

  get signupLastname():string{
    return this._signupLastname;
  }
  set signupLastname(val:string){
    this._signupLastname=val;

  }  
  get signupEmail():string{
    return this._signupEmail;
  }
  set signupEmail(val:string){
    this._signupEmail=val;
  }

  get signupPassword():string{
    return this._signupPassword;
  }
  set signupPassword(val:string){
    this._signupPassword=val;
  }
  get signupPasswordAgain():string{
    return this._signupPasswordAgain;
  }
  set signupPasswordAgain(val:string){
    this._signupPasswordAgain=val;
  }


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
}
ngOnInit() { 
}
save(){
  console.log(this.signupName,this.signupLastname,this.signupEmail,this.signupPassword,this.signupPasswordAgain)
  if(this.signupPassword!=this.signupPasswordAgain){
    this.isTrue=true;
  }
}
if (signupPassword=!this.signupPasswordAgain) {
  console.log(signupPassword)
  console.log(this.signupPasswordAgain)

}
}
