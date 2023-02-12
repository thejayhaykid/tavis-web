import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationModel } from 'src/app/interface/registration.model';
import { TavisService } from 'src/app/services/tavis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  invalidLogin: boolean | undefined;
  rememberMe: boolean = false;
  previouslyRemembered: boolean = false;
  hideRegionSearchDropdown = true;
  credentials: RegistrationModel = {
    username:'', 
    usernameConfirm:'',
    password:'',
    passwordConfirm:'',
    gamertag:'',
    region:'',
    area:''
  };

  constructor(private tavisService: TavisService) { }

  ngOnInit(): void {
    this.getAvailableRegions();
    this.getAvailableAreas();
  }

  register = (form: NgForm) => {

  }

  getAvailableRegions() {
    this.tavisService?.getAvailableRegions().subscribe(data => {
      console.log(data);
    })
  }

  getAvailableAreas() {
    this.tavisService?.getAvailableAreas().subscribe(data => {
      console.log(data);
    })
  }

  toggleRegionSearchDropdown = () => {
    this.hideRegionSearchDropdown = !this.hideRegionSearchDropdown;
  }
}
