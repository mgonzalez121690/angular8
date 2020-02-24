import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu-operation',
  templateUrl: './user-menu-operation.component.html',
  styleUrls: ['./user-menu-operation.component.css']
})
export class UserMenuOperationComponent implements OnInit {

  @Input() userInfo: any;

  constructor(private router:Router, 
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
