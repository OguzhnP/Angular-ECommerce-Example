import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products : Product[] =[];

  constructor(
    private cart : Cart,
  ){}
  addProductToCart(product : Product)  {
    this.cart.addItem(product);
  }

}
