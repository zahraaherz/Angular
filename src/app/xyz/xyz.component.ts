import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})

export class XyzComponent {
  
  constructor(private ul :  AppComponent) { }
  getUsers = this.ul.userInfo
}
