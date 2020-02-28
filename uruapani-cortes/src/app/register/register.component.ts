import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  passwordsMustMatch, emailNickNameMustNotMatch } from '../validators/credentialsValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accountForm: FormGroup;
  contactForm: FormGroup;
  
  personTypes = [
    { value:1 , viewValue:'Persona física'},
    { value:2 , viewValue:'Persona moral'}
  ];

  cardDateValidity: any =[
    {months:['01','02','03','04','05','06','07','08','09','10','11','12']},
    {years:['2020','2021','2022','2023','2024','2025']}
  ];

  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        nickname: ['', Validators.required]
    },{
      validator: [passwordsMustMatch('password','confirmPassword'), emailNickNameMustNotMatch('email','nickname')]
    });

    this.contactForm = this.formBuilder.group({
     personType: ['', [Validators.required]]
    });



  }

  get f() { return this.accountForm.controls; }

  onSubmit(){
    this.submitted = true;

    if( this.accountForm.invalid ){
      return;
    }

    console.log("success");


  }


}
