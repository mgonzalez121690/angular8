import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StructureDirectivesComponent } from './structure-directives/structure-directives.component';
import { InteractiveComponentComponent } from './interactive-component/interactive-component.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';


  

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructureDirectivesComponent,
    InteractiveComponentComponent,
    ServicesComponent,
    ServiceDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
