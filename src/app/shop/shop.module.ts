import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSumComponent } from './cart-sum/cart-sum.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    ShopComponent,
    NavbarComponent,
    CartSumComponent,
    CartDetailComponent,
    CheckoutComponent,
    ProductListComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ModelModule,
    RouterModule,
  ],
  exports:[
    ShopComponent,
    CartDetailComponent,
    CheckoutComponent
  ]
})
export class ShopModule { }
