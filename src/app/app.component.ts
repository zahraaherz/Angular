import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  userInfo = [{"firstName":"zahraa","lastName":"ali" ,"userName": "user" ,"password":"123456" }];
  saveUserInfo(user: any){
     this.userInfo.push(user);
   // console.log(this.userInfo.values)
  }
  
}

 
