import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountRegistrationModel } from 'src/app/interface/account-registration.model';
import { PersonalRegistrationModel } from 'src/app/interface/personal-registration.model';
import { RegistrationModel } from 'src/app/interface/registration.model';
import { TavisService } from 'src/app/services/tavis.service';
import { FadeInOut } from '../animation.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [FadeInOut(200, 300, true)]
})
export class RegisterComponent implements OnInit {
  invalidLogin: boolean | undefined;
  rememberMe: boolean = false;
  previouslyRemembered: boolean = false;
  hideRegionSearchDropdown = true;
  emailIsValid: boolean = false;
  emailValidityMessage: string = 'Invalid Email';
  emailsMatch: boolean = false;
  emailMatchMessage: string = 'Emails do not match';
  passwordsMatch: boolean = false;
  passwordMatchMessage: string = 'Passwords do not match';
  accountInfoSubmitted: boolean = false;
  personalInfoSubmitted: boolean = false;
  regions: any = null;
  areas: any = null;
  regionSelected: boolean = false;

  registration: RegistrationModel = {
    username:'', 
    username_confirm:'',
    password:'',
    password_confirm:'',
    gamertag:'',
    region: '',
    area: '',
    discord: ''
  }

  accountInfo: AccountRegistrationModel = {
    username:'', 
    username_confirm:'',
    password:'',
    password_confirm:'',
    gamertag:''
  }

  personalInfo: PersonalRegistrationModel = {
    region: '',
    area: '',
    discord: ''
  }

  constructor(private tavisService: TavisService) { }

  ngOnInit(): void {
    this.getAvailableRegions();
  }

  register = (form: NgForm) => {
    if (form.valid) {
      // hydrate the full registration form
      this.registration.username = this.accountInfo.username;
      this.registration.password = this.accountInfo.password;
      this.registration.gamertag = this.accountInfo.gamertag;

      this.accountInfoSubmitted = true;
    }
    else
      alert('something broke');
  }

  registerInfo = (form: NgForm) => {
    if (form.valid) {
      // hydrate the full registration form
      this.registration.region = this.personalInfo.region;
      this.registration.area = this.personalInfo.area;
      this.registration.discord = this.personalInfo.discord;

      this.personalInfoSubmitted = true;
    }
    else
      alert('something broke');
  }

  getAvailableRegions = () => {
    this.tavisService?.getAvailableRegions().subscribe(data => {
      this.regions = data;
    })
  }

  onRegionSelect = (region: string) => {
    this.tavisService?.getAvailableAreas(region).subscribe(data => {
      this.areas = data;
      this.regionSelected = true;
    })
  }

  toggleRegionSearchDropdown = () => {
    this.hideRegionSearchDropdown = !this.hideRegionSearchDropdown;
  }

  submitRegistration = () => {
    console.log(this.registration);
  }
}
