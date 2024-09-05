import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  loginform = new FormGroup({
    name : new FormControl('',[Validators.required]) ,
    email : new FormControl('',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    city : new FormControl('',[Validators.required]) ,
    password : new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  constructor(private router: Router, public service: DataService){}

  submitted = false;
  touched = true;
  formRecords: any[] = [];

  login() {
    this.submitted = true;

    if (this.loginform.invalid) {
      return;
    }

    this.service.registerUser(this.loginform.value).subscribe(
      response => {
        const userId = response.id;
        this.router.navigate(['/users', userId], { state: { data: this.loginform.value } });
      }
    );
  }


}
