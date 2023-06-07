import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor( private back : Router){}

  backToLogin(){
    console.log("Hello");
    this.back.navigateByUrl('/login');
  }

}
