import { IProduct } from "./product";

import{ Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class ProductServices{

    getProduct():IProduct[]{
        return [
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
        }
    
    }