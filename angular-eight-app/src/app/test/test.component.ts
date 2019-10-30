import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
            {{name}}
          </h2>

          <h2 [class.text-danger]="hasError">Binding class by class.className example: [class.text-danger]</h2>
          <h2 [ngClass]="messageClasses">Binding class using a object and ngClass: [ngClass]="objectName"</h2>
          <h2 [style.color]="'orange'">Style binding by style.color: [style.color]="colorName"</h2>
          <h2 [style.color]="hasError ? 'red' : 'green'">Style binding with conditions</h2>
          <h2 [style.color]="highlightColor">Style binding by property</h2>
          <h2 [ngStyle]="titleStyles">Style binding by ngStyle directive</h2>
          
          <button (click)="clickButtonEvent($event)">event binding</button>
          {{bindingEventProperty}}
          
          <button (click)="bindingEventProperty='asingment on property binding'">event binding</button>
          <input #myInput type="text">  
          <button (click)="logMessage(myInput.value)">log message</button>
          {{variableReference}}
          <br/>
          <div>
          <input type="text" [(ngModel)]="anotherName">
          {{anotherName}}
          </div>
          `,
  styles: [` .text-success{
                color: green;
              } 
              .text-danger {
                color:red;
              } 
              .text-special {
                font-style: italic;
              }
  
  `]
})
export class TestComponent implements OnInit {
  public anotherName="";
  public name = 'Maveware';
  public siteUrl = window.location.href;
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public bindingEventProperty = "";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  } 

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public variableReference;


  constructor() { }

  ngOnInit() {
    
  }

  greetUser(){
    return "Hello" + this.name;
  }

  clickButtonEvent(event){
    console.log(event);
    this.bindingEventProperty  = event.type;
  }

  logMessage(value){
    console.log(value);
    this.variableReference = value;
  }

}
