import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { 
    
    if( this.authenticationService.currentUserValue){
      this.router.navigate(['home']);
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]

    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
  }

  get f() {return this.loginForm.controls};

  onSubmit(){
    this.submitted = true;
    
    if( this.loginForm.invalid ){
      return;
    }

    this.loading = true;
    this.authenticationService
        .login( this.f.username.value, this.f.password.value )
        .pipe( first() )
        .subscribe(
          data => {
            this.router.navigate(['home']);
            console.log(JSON.stringify(data));
          },
          error => {
            this.error = this.handleError(error);
            this.loading = false;
            console.log(JSON.stringify(error));
          }
        );

  }

  handleError(error){
    if( error.status === 401 ){
      return 'Usuario o contraseña son incorrectos.';
    }

  }

  register(){
    this.router.navigate(['register'])
  }
  
}
