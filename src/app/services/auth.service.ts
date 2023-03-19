import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
  constructor(private httpService:ServiceService,private router: Router,) { }
  loginUser:any=[]
  fullName:String=""

   isUserLoggedIn: boolean = false;

   login(email: string, password: string,rememberMe:boolean): void {
    let params={email,password}
    this.httpService.Post("https://localhost:7191/login",params).subscribe((resp:any)=>{
      this.loginUser=resp;
      if(rememberMe){
        localStorage.setItem('userCredential',resp.token) 
      }else{
        sessionStorage.setItem('userCredential',resp.token) 
      }
      this.isUserLoggedIn=true;
      localStorage.setItem('isUserLoggedIn','true');       
      this.router.navigate(['/home']); 
    }, (err) => {
      this.isUserLoggedIn=false;
      alert(err)
    })    
   }
   getFullName(){
    this.fullName = this.loginUser.name + " " + this.loginUser.lastName
    return this.fullName
   }
   logout(): void {
      localStorage.removeItem('isUserLoggedIn'); 
      localStorage.removeItem('userCredential')
      this.isUserLoggedIn = false;
      this.router.navigate(['/login']); 
   }

}
