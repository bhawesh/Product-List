import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ConvertToSpacesPipes} from './product/custom-pipe';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import{StarRating} from '../shared/star.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacesPipes,
    StarRating
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
