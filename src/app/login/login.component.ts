import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  datas:any=[];
  constructor(private httpService:ServiceService,private router: Router){}
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
loginUsers(){
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
checkPassword(){
  console.log(this.signupName,this.signupLastname,this.signupEmail,this.signupPassword,this.signupPasswordAgain)
  if(this.signupPassword!=this.signupPasswordAgain){
    this.isTrue=true;
  }
  else{
    const navigationDetails: string[] = ['/home'];
    this.router.navigate(navigationDetails)

  }
}
if (signupPassword=!this.signupPasswordAgain) {
  console.log(signupPassword)
  console.log(this.signupPasswordAgain)

}
  registerButton(){
    this.createUser()
    this.checkPassword()
  }
  createUser(){
    let params={name:this.signupName,lastName:this.signupLastname,email:this.signupEmail,password:this.signupPassword,passwordAgain:this.signupPasswordAgain}
     this.httpService.Post("https://localhost:7191/register",params).subscribe((resp)=>{
     }, (err) => {
      alert(err.message)
    });
  }
  loginUser(){
    let params={email:this.loginEmail,password:this.loginPassword}
     this.httpService.Post("https://localhost:7191/login",params).subscribe((resp)=>{      
      const navigationDetails: string[] = ['/home'];
      this.router.navigate(navigationDetails)
}, (err) => {
      alert(err.message)
    });
  }
}
