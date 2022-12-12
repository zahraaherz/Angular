
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Routes, RouterModule, RouterLink, Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { XyzComponent } from 'src/app/xyz/xyz.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private fb: FormBuilder ,   private ul :  AppComponent ,private router: Router) { }

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    // userData: new FormArray([]), 

  });

  get getRegisterationForm() { return this.registerForm.controls; }

  submit(){
    console.log(this.registerForm.value)
    this.ul.saveUserInfo(this.registerForm.value)
    console.log(this.ul.userInfo)
    this.router.navigate(['/', 'userList']);

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }

      
}