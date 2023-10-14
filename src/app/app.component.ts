import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'BCMX';
  hideProfileMenu = true;
  hideMobileMenu = true;
  showRegisterButton = true;

  constructor(private jwtHelper: JwtHelperService, private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (location.href.indexOf('register') !== -1)
          this.showRegisterButton = false;
        else this.showRegisterButton = true;
      }
    });
  }

  ngOnInit(): void {}

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) return true;

    return false;
  };

  logOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/home']);
  };

  toggleProfileMenu = () => {
    this.hideProfileMenu = !this.hideProfileMenu;
  };

  toggleMobileMenu = () => {
    this.hideMobileMenu = !this.hideMobileMenu;
  };
}
