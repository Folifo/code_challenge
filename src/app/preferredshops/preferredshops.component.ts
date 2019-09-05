import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-preferredshops',
  templateUrl: './preferredshops.component.html',
  styleUrls: ['./preferredshops.component.css']
})
export class PreferredshopsComponent implements OnInit {

  constructor(private shopservice:ShopService) { }

  ngOnInit() {
     
  }


  remove(value:any){
    let n = this.shopservice.preferredshops.indexOf(value);
    this.shopservice.preferredshops.splice(n,1);
  }
}
