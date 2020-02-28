import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
  MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatMenuModule,
   MatExpansionModule, MatInputModule, MatSelectModule} from  '@angular/material';

import { MatStepperModule } from '@angular/material/stepper';
  
import { MatCardModule } from '@angular/material/card'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserMenuOperationComponent } from './user-menu-operation/user-menu-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent,
    UserMenuOperationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatButtonModule, MatAutocompleteModule, MatFormFieldModule, 
    MatMenuModule,MatCardModule,MatStepperModule,
    appRoutingModule, MatExpansionModule, MatInputModule, 
    BrowserAnimationsModule, MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
