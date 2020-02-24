import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { MatMenuModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'uruapani-cortes';
  currentUser:  User;
  userbyRole: any;

  menuNav = [
    {name:"home", route:"",icon:""},
    {name:"home", route:"",icon:""}

  ];

    constructor(
      private router:Router, 
      private authenticationService: AuthenticationService
    ){
        this.authenticationService.currentUser.subscribe( x => this.currentUser = x);
      
        console.log(JSON.stringify(this.currentUser));
    }

    ngOnInit(): void {
      if( this.currentUser ){
        this.userbyRole = {
          username: this.currentUser.userName,
          role: this.currentUser.role[0]
        }
      }
    }

}
