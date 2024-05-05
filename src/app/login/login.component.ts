import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor(
    private authSerice: AuthService,
    private router: Router
  ) { }

  login(){
    ;

    if(this.authSerice.onSignUp(this.loginObj) != 0){
      this.router.navigate(['/listoftodos']);
    }
    else{
      //code to make css changes when auth fails
    }
  }

}
