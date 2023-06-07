import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*type User = {
  userName : string,
  passWord : number
}*/

export class LoginComponent {

  constructor(private router : Router) {
    
  }
  userInput:any;
  passwordInput:any;
  user:any;

  users = [
    {userName:"Fighter" ,passWord:1234},
    {userName:"Saiparn" ,passWord:2345},
    {userName:"Korn" ,passWord:3456}
  ]



  signIn(){
    this.users.forEach((user) => {
      if( user.userName === this.userInput && user.passWord === this.passwordInput){
        this.router.navigateByUrl('/user');
      }else{
        this.router.navigateByUrl('/notuser');
      }
    })
  }
}
