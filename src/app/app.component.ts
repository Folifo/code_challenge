import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  title = 'front-shop';
   current=true;
  constructor(private router: Router, private authservice: LoginService){

  }

  ngOnInit(): void {
    
  }
  onLogout(){
    this.authservice.removeTokenFromLocalStorage();
    this.router.navigateByUrl('/login');
  }

  preferredshopsCheck(){
    let check= localStorage.getItem('authToken');
    if(check){
      this.router.navigateByUrl('/preferredshops');
      this.current=false;
    }else{
      confirm('you need to have an account!');
    }
  }

  nearbyshopsCheck(){
    let check= localStorage.getItem('authToken');
    if(check){
      this.router.navigateByUrl('/shops');
      this.current=true;
    }else{
      confirm('you need to have an account!');
    }
   
  }


 
}
