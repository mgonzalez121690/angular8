import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { InteractiveComponentComponent } from './interactive-component/interactive-component.component';

  

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructureDirectivesComponent,
    InteractiveComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
