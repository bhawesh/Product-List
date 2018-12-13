import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ConvertToSpacesPipes} from './product/custom-pipe';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import{StarRating} from '../shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './Home/Welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacesPipes,
    StarRating,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     {path : 'product', component: ProductComponent},
     {path : 'product/:id' , component: ProductDetailComponent},
     {path :'Welcome' , component : WelcomeComponent},
     {path : '', redirectTo: 'welcome' , pathMatch : 'full' },
     {path : '**', redirectTo: 'welcome' , pathMatch : 'full' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
