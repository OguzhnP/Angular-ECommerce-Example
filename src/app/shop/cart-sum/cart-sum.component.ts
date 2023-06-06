import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-sum',
  templateUrl: './cart-sum.component.html',
  styleUrls: ['./cart-sum.component.css']
})
export class CartSumComponent {
  constructor(public cart : Cart){}


  
}
