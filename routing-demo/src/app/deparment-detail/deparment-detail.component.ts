import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-deparment-detail',
  template: `
              <h3 class="mar">
                Welcome to {{departmentId}} department
              </h3>
              
              <div class="mar">
                <button class="btn btn-default" (click)="showOverview()">Overview</button>
                <button class="btn btn-default" (click)="showContact()">Contact</button>
              </div>
              
              <router-outlet></router-outlet>

              <div class="mar"> 
                <button class="btn btn-primary" (click)="goPrevious()"> << Previos</button>
                <button class="btn btn-info" (click)="goNext()"> Next >> </button>
              </div>
              <div class="mar">
                <button class="btn btn-default" (click)="gotoDepartment()">Back</button>
              </div>

            `,
  styles: [ ]
})
export class DeparmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
    
  }

  goPrevious(){
      let previous = this.departmentId - 1;
      this.router.navigate(['/departments', previous]);
      
  }

  goNext(){
    let next = this.departmentId + 1;
    this.router.navigate(['/departments', next]);
    
  }

  gotoDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  } 

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});

  }

  showContact(){
  this.router.navigate(['contact'], {relativeTo: this.route});
  }
 
}
