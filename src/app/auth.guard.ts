import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }
      val:any;
      checkLogin(url: string): true | UrlTree {
        console.log("Url: " + url)
        this.val = localStorage.getItem('isUserLoggedIn');

        if(this.val != null && this.val == "true"){
           if(url == "/login")
              this.router.parseUrl('/admin');
           else 
              return true;
        } else {
           return this.router.parseUrl('/home');
        }
        return true;
     }

  
}
