import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  loginform = new FormGroup({
    name : new FormControl('',[Validators.required]) ,
    email : new FormControl('',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    phone : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]) ,
    contact : new FormControl('',[Validators.required])
  })

  constructor(private router: Router, public service: DataService){}

  submitted = false;
  touched = true;

  Submit() {
    this.submitted = true;

    if (this.loginform.invalid) {
      return;
    }
  }


}
