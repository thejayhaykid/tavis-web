import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../interface/login.model';
import { AuthenticatedResponse } from '../../interface/authenticated-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  discordSignin: string = '';
  invalidLogin: boolean | undefined;
  rememberMe: boolean = false;
  previouslyRemembered: boolean = false;
  credentials: LoginModel = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.discordSignin = environment.discordSignin;

    var rememberedLogin = localStorage.getItem('UserLogin');

    if (rememberedLogin != null) {
      this.previouslyRemembered = true;
      this.credentials.username = rememberedLogin;
      this.rememberMe = true;
    }
  }

  login = (form: NgForm) => {
    this.manageUserRememberance();

    if (form.valid) {
      this.http
        .post<AuthenticatedResponse>(
          environment.api.baseUrl + 'auth/login',
          this.credentials,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            const refreshToken = response.refreshToken;
            localStorage.setItem('jwt', token);
            localStorage.setItem('refreshToken', refreshToken);
            this.invalidLogin = false;
            this.router.navigate(['/home']);
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };

  connect = () => {
    window.location.href =
      'https://xbl.io/app/auth/eb9ab783-e41f-d428-0319-fb2d4d4a0d71';
  };

  rememberMeToggle = () => {
    this.rememberMe = !this.rememberMe;
  };

  private manageUserRememberance = () => {
    if (this.previouslyRemembered == this.rememberMe) return;

    if (this.rememberMe)
      localStorage.setItem('UserLogin', this.credentials.username);
    else localStorage.removeItem('UserLogin');
  };
}
