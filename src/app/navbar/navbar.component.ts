import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authService: AuthService) {}
  ngOnInit() {
  }
  isUserLoggedIn():boolean{
    return localStorage.getItem("isUserLoggedIn")=='true';

  }
  logOut(){
    this.authService.logout();
  }
}
