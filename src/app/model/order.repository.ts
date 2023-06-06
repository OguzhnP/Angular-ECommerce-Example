import  {Injectable, OnInit} from '@angular/core'; 
import { RestService } from './rest.service';
import { Order } from './order.model';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository implements OnInit{
  private orders : Order[]=[];

  constructor(private restService: RestService){
  }
  ngOnInit(): void {

  }

  getOrders(id : number) : Order [ ] {
    return this.orders;
  }

  saveOrder(order : Order):Observable<Order> {
    return this.restService.saveOrder(order);
  }
}
