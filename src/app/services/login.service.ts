import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private users = [
   {email: 'aaa@bbb.com' , password:'123'},
   {email: 'bbb@ccc.com' , password:'000'}
 ]
 public isAuthenticated: boolean;
 public authenticatedUser;
 public token;


  constructor() { }

  public login(email:string , password:string){
    let user=null;
    this.users.forEach(u=>{
      if((u.email==email)&&(u.password==password)){
        user=u;
        this.token={email:u.email , password:u.password};
      }
    });

    if(user){
      this.isAuthenticated=true;
      this.authenticatedUser=user;
    }else{
      this.isAuthenticated=false;
      this.authenticatedUser=undefined;
    }

  }

  public saveAuthenticatedUser(){
    if(this.isAuthenticated){
      localStorage.setItem('authToken', btoa(JSON.stringify(this.token)));
    }
  }

  public loadAuthenticatedUserFromLocalStorage(){
    let t= localStorage.getItem('authToken');
      if(t){
          let authUser = JSON.parse(atob(t));
          this.authenticatedUser=authUser;
          this.isAuthenticated=true;
          this.token=t;
      }
  }

  public removeTokenFromLocalStorage(){
    localStorage.removeItem('authToken');
    this.isAuthenticated=false;
    this.authenticatedUser=undefined;
    this.token=undefined;
  }

  

}
