import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(array, orderBy, asc = true){

    if (!orderBy || orderBy.trim() == ""){
      return array;
    } 

    //ascending
    if (asc){
      return Array.from(array).sort((item1: any, item2: any) => { 
        return this.orderByComparator(item1[orderBy], item2[orderBy]);
      });
    }
    else{
      //not asc
      return Array.from(array).sort((item1: any, item2: any) => { 
        return this.orderByComparator(item2[orderBy], item1[orderBy]);
      });
    }

}

orderByComparator(a:any, b:any):number{

    if(parseFloat(a) < parseFloat(b)) return -1;
    if(parseFloat(a) > parseFloat(b)) return 1;
  return 0; 
}
}
