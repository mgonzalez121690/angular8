import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 class="text-success">
            {{name}}
          </h2>
          <input  [id]="myId" type="text" value="Maveware">
          <input  bind-disabled="isDisable" id="{{myId}}" type="text" value="Maveware">
          <h2 [class]="successClass">This is bingding class</h2>
          <h2 [class]="successClass" class="text-special">This is bingding class</h2>
          <h2 [class.text-danger]="hasError">This is bingding class</h2>
          <h2 [ngClass]="messageClasses">This is bingding for messageClasses</h2>
  `,
  styles: [` .text-success {
                color:green;
              }
              .text-danger {
                color:red;
              }
              .text-special {
                font-style:italic;
              }
  
  
  `]
})
export class TestComponent implements OnInit {
  public name = 'Maveware';
  public siteUrl = window.location.href;
  public myId="testId";
  public isDisable = false;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
      "text-success": !this.hasError,
      "text-danger":this.hasError,
      "text-special": this.isSpecial
  }
  
  constructor() { }

  ngOnInit() {
    
  }

  greetUser(){
    return "Hello" + this.name;
  }

}
