import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
     pageTitle : string = 'Product List';
     imageWidth: number =50;
     imageMargin: number =2;
     showImage:boolean=false;
     _listFilter: string

     get listFilter(): string{
        return this._listFilter;
     }

     set listFilter(value: string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products; 
     }
     filteredProducts:IProduct[];
     products :IProduct[] = [
       {
     productId:1,
     productName:'Mobile',
     productCode:'123-abc',
     releaseDate: '26 Nov 2018',
     price: '10',
     starRating: '3.5',
     imageUrl:'https://openclipart.org/download/182253/New-hTC-one-black.svg'
    },
    {
      productId:2,
      productName:'Umbrella',
      productCode:'124-def',
      releaseDate: '27 Nov 2018',
      price: '10.5',
      starRating: '4.2',
      imageUrl:'https://openclipart.org/download/226220/Umbrella-animation.svg'
    }
    
    ];
   
    performFilter(filterBy: string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }


  constructor() { 

    this.filteredProducts=this.products;
    this.listFilter='cart';
  }

  ngOnInit() {
  }
  toogleImage():void{
    this.showImage = !this.showImage;
  }
}
