import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  
  constructor(private fb: FormBuilder ,   private ul :  AppComponent , private router: Router) { }

  logInForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),

  });

  submit(rf: any){
    console.log(this.logInForm.value)
    let userNameInLogin = this.logInForm.value.userName 
    let passwordInLogin = this.logInForm.value.password 
    let user = this.ul.userInfo.find((user) => {return user.userName == userNameInLogin && user.password == passwordInLogin})
    if (user != null) {
      this.router.navigate(['/', 'userList']);
    } else {
      console.error("no data found")
    }
  }
  ngOnInit(): void { }
 
}