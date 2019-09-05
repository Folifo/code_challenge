import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../model/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  public host: string ="http://localhost:8080/shops";
  public shops=null;
  public preferredshops: Array<Shop>= new Array();

  constructor(private http: HttpClient) { }

  public getShops():any{
    return this.http.get(this.host);
  }


  public addShop(value: any){
       let shop=new Shop();
       shop.id=value.id;
       shop.name=value.name;
       shop.distance=value.distance;
       this.preferredshops.push(shop);
       
  }

  public removeShop(value: any){
    let n=this.preferredshops.indexOf(value);
    this.preferredshops.splice(n,1);
}

}
