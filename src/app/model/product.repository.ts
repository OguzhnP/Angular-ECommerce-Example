import  {Injectable, OnInit} from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable()
export class ProductRepository implements OnInit{
  private products : Product[]=[];

  constructor(private restService: RestService){
    this.restService.getProducts().subscribe(
      products => this.products = products,
    );
  }
  ngOnInit(): void {

  }

  getProduct(id : number) : Product{
    return this.products.find(product => product.id === id) as Product;
  }

  getProducts(category? : Category) : Product[]{
    if (category)
      return this.products.filter(p=> p.category === category.name);
    else
      return this.products;


    }
}
