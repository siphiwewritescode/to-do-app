import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupUsers: any[] = [];

  constructor(
    private authSerice: AuthService,
    private router: Router
  ) { }

  signupObj:any = {
    userName: '',
    email: '',
    password: '',
  };

  signUp(){
    this.authSerice.onSignUp(this.signupObj);
    this.router.navigate(['/login']);
  }
}
