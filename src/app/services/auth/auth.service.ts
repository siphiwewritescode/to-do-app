import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onSignUp(user: any){
    localStorage.setItem('signUpUser', JSON.stringify(user));
    return user;
  }
  
  onLogin(user: any){
    const localData = localStorage.getItem('signUpUser');
    if(localData == user){
      return user;
    }else{
      return 0;
    }
  }

}
