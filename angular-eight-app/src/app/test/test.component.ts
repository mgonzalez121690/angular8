import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
            {{name}}
          </h2>

          <h2>{{2+2}}</h2>
          <h2>{{"Welcome: "  + name}}</h2>
          <h2>{{"Welcome: "  + name.length +" size"}}</h2>
          <h2>{{"Uppercase: " + name.toUpperCase()}}</h2>
          <h2>{{greetUser()}}</h2>
          <h2>{{siteUrl}}</h2>

  `,
  styles: [` div{
            color:red;
  }`]
})
export class TestComponent implements OnInit {
  public name = 'Maveware';
  public siteUrl = window.location.href;
  
  constructor() { }

  ngOnInit() {
    
  }

  greetUser(){
    return "Hello" + this.name;
  }

}
