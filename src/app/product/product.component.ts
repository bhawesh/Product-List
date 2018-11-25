import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
     pageTitle : string = 'Product List';
     products :any= [
       {
     productId:1,
     productName:'Hammer',
     productCode:'123',
     releaseDate: '26 Nov 2018',
     price: '10$',
     starRating: '3.5'
    },
    {
      productId:2,
      productName:'Face Wash',
      productCode:'124',
      releaseDate: '27 Nov 2018',
      price: '10.5$',
      starRating: '4.2'

    }
    
    ];
  constructor() { }

  ngOnInit() {
  }

}
