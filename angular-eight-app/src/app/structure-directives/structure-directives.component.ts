import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  template:  ` 
          <div *ngIf="displayName; then thenBlock; else elseBlock"></div> 

            <ng-template #thenBlock>
              <h2>Angular 8 testing</h2>
            </ng-template>


            <ng-template #elseBlock>
              <h2>
              Name is hidden
              </h2>
            </ng-template>
          
          <div [ngSwitch]="colorSwitch">
            <div *ngSwitchCase="'red'">You picked red color</div>
            <div *ngSwitchCase="'blue'">You picked blue color</div>
            <div *ngSwitchCase="'green'">You picked green color</div>
            <div *ngSwitchDefault>You picked default color</div>
          </div>

          <h1>ngFor angular directive</h1>
          <div *ngFor="let color of colors; even as e">
            <h2>{{e}} {{color}}</h2>
          </div>

            `,
  styles: [``]
})
export class StructureDirectivesComponent implements OnInit {

  displayName = true;
  public colorSwitch = 'purple';
  public colors = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
