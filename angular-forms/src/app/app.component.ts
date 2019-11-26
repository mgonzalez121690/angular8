import { Component } from '@angular/core';
import { User } from './user';
import { TestBed } from '@angular/core/testing';
import { EnrollmentService } from './enrollment.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics = ['Angular','React','Vue'];
  public userModel = new User('Rob','rob@test.com',5555564879, 'default','morning',true);
  public topicHasError = true;

  constructor(private enrollmentService: EnrollmentService){}

  validateTopic(value){
      if( value === 'default'){
          this.topicHasError = true;
      } else{
        this.topicHasError = false;
      }
  }

  onSubmit(){
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
        .subscribe( 
          data => console.log('success', data),
          error => console.error('Error!', error)
         )
    
  }
}
