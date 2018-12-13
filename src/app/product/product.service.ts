import { IProduct } from "./product";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Observable, throwError} from 'rxjs';
import{ Injectable } from '@angular/core';
import{catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class ProductServices{

    private productUrl='/assets/Data/products.json';

constructor(private http: HttpClient){}

    getProduct():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All:'+ JSON.stringify(data))),
        catchError(this.handleError)
        );
        }
    
    


    private handleError(err: HttpErrorResponse){
     
        let errorMessage='';

        if(err.error instanceof ErrorEvent ){
            errorMessage=`The  Error occured : ${err.error.message}`;
        }

        else{

            errorMessage=`Server returned code: ${err.status} , error message is:${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);




    }

    }