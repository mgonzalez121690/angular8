import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-interactive-component',
  template: ` <h2> This messaege was provided from parent: {{name}} </h2>
              <button (click)="fireEvent()">Send event</button>

              <h3>The next properties were manipulated using pipe </h3>
               <h4>{{ name | lowercase }}</h4> 
               <h4>{{ name | uppercase }}</h4> 
               <h4>{{ message | titlecase }}</h4> 
              <h4> {{ name  | slice:3}}
              <h4> {{ name  | slice:3:5}}
              <h4> {{ person  | json }}

              <h4> {{ 5.678  | number:'1.2-3' }}
              <h4> {{ 5.678  | number:'3.4-5' }}
              <h4> {{ 5.678  | number:'3.1-2' }}

              <h4> {{ 0.25  | percent }}
              <h4> {{ 0.25  | currency }}
              <h4> {{ 0.25  | currency:'GBP' }}
              <h4> {{ 0.25  | currency:'EUR' }}
              <h4> {{ date }}
              <h4> {{ date | date:'short' }}
              <h4> {{ date | date:'shortDate' }}
              <h4> {{ date | date:'shortTime' }}
  `,
  styleUrls: ['./interactive-component.component.css']
})
export class InteractiveComponentComponent implements OnInit {

  @Input('parentData')
  public name;

  @Output()
  public childEvent = new EventEmitter();

  public message = "This message will manipulate for pipe";
  public person = { "firstName":"Macario", "Age":21, "lastName":"Segundo"}
  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey, this message was sent by child component');
  }

}
