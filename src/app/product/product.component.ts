import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ProductServices } from './product.service';
@Component({
  
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
     pageTitle : string = 'Product List';
     imageWidth: number =50;
     imageMargin: number =2;
     showImage:boolean=false;
     _listFilter: string;
     errorMessage : string;
     get listFilter(): string{
        return this._listFilter;
     }
      
     onRatingClicked(message:string):void{
       this.pageTitle='Product List :' + message;
     }


     set listFilter(value: string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products; 
     }
     filteredProducts:IProduct[];
     products :IProduct[]
      
   
    performFilter(filterBy: string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }


  constructor(private productservices: ProductServices) { 

    
    
  }

  ngOnInit() :void{
   this.productservices.getProduct().subscribe(
   products => {
     this.products= products;
   this.filteredProducts = this.products;

   },
   error => this.errorMessage = <any>error

   );
  
  }
  toogleImage():void{
    this.showImage = !this.showImage;
  }
}
