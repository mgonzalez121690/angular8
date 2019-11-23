import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-department-list',
  template: `
          <h3> Deparment list!</h3>

        <ul>
          <li (click)="onSelect(department)" *ngFor="let department of departments" class="btn btn-info">
            <span class="btn btn-danger">{{department.id}} </span> {{department.name}}
          </li>
        </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router) { }

  public departments = [
    {"id":1,"name":"Java"},
    {"id":2,"name":"Python"},
    {"id":3,"name":"JavaScript"},
    {"id":4,"name":"MongoDB"},
    {"id":5,"name":"Oracle"}
  ];

  ngOnInit() {
  }

  onSelect(department){
    //this.router.navigate(['/departments', department.id]);
      this.router.navigate([]);
  }

}
