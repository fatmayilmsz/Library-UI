import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
  constructor(private httpService:ServiceService,private router: Router) { }

   isUserLoggedIn: boolean = false;

   login(email: string, password: string): void {
    let params={email,password}
    this.httpService.Post("https://localhost:7191/login",params).subscribe((resp:any)=>{
      localStorage.setItem('userCredential',resp.token) 
      this.isUserLoggedIn=true;
      localStorage.setItem('isUserLoggedIn','true');       
      this.router.navigate(['/admin']); 
    }, (err) => {
      this.isUserLoggedIn=false;
      alert(err)
    })    
   }

   logout(): void {
      localStorage.removeItem('isUserLoggedIn'); 
      localStorage.removeItem('userCredential')
      this.isUserLoggedIn = false;
      this.router.navigate(['/login']); 
   }

}
