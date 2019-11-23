import { Component } from '@angular/core';
import { User } from './user';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics = ['Angular','React','Vue'];
  public userModel = new User('Roob','rob@test.com',5555564879, 'React','morning',true);
}
