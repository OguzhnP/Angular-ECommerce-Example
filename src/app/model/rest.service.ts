import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Order } from './order.model';

@Injectable( )
export class RestService {
  baseUrl : string= 'http://localhost:3500/';
  constructor(private httpServer : HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.httpServer.get<Product[]>(this.baseUrl+"products");
  }
  getCategories() : Observable<Category[]> {
    return this.httpServer.get<Category[]>(this.baseUrl+"categories");
  }
  saveOrder(order :Order): Observable<Order> {
    return this.httpServer.post<Order>(this.baseUrl+"orders",order);
  }

}
