import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nearbyshops',
  templateUrl: './nearbyshops.component.html',
  styleUrls: ['./nearbyshops.component.css']
})
export class NearbyshopsComponent implements OnInit {
   public shops = null;
   orderBy = "distance";
   ascending = true;

  constructor(private shopservice: ShopService, private loginservice: LoginService) { }

  ngOnInit() {
    
    this.loginservice.loadAuthenticatedUserFromLocalStorage();
    this.shopservice.getShops()
      .subscribe(data=>{
        this.shops=data['_embedded']['shops'];
      },err=>{console.log(err)});

  }
  
  like(value : any){
    this.shopservice.addShop(value);
        this.shops.splice(this.shops.indexOf(value),1);
  }

  dislike(value : any){
     this.shops.splice(this.shops.indexOf(value),1);
  }
}
