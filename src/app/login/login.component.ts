import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wronguser=false;
  constructor(private loginservice : LoginService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(value : any){
    this.loginservice.login(value.email, value.password);
    if(this.loginservice.isAuthenticated){
       this.loginservice.saveAuthenticatedUser();
       this.router.navigateByUrl('/shops');
    }else{
      this.wronguser=true;
    }
  }
}
