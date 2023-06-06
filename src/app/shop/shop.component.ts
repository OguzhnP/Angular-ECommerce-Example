import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public selectedCategory? : Category;
  public productsPerPage =3;
  public selectedPage =1;
  public selectedProducts : Product[] = [];

  constructor
  (
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart : Cart,
    private router : Router,
  )
  {}
  ngOnInit(): void {

  }

  get products() : Product[] {
    let index= (this.selectedPage-1) * (this.productsPerPage);
    this.selectedProducts=this.productRepository.getProducts(this.selectedCategory);
    return  this.selectedProducts.slice(index,index + this.productsPerPage);
  }
  get categories() : Category[] {
    return  this.categoryRepository.getCategories();
  }

  get pageNumbers():number[] {
    return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((a,i)=>i+1);
    }
  changeCategory(newCategory?: Category){
    this.selectedCategory = newCategory;
  }

  changePage(p : number){
    this.selectedPage = p;
  }

  addProductToCart(product : Product)  {
    this.cart.addItem(product);
  }

}
