import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userData: any;

  constructor(private route: ActivatedRoute, public Service: DataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userData = history.state.data;

      this.Service.saveUser(this.userData).subscribe(response => {
        this.userData = response;
        console.log('Data saved successfully:', response);
      });
    });
  }
}
