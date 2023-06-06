import  {Injectable, OnInit} from '@angular/core';
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable()
export class CategoryRepository implements OnInit{
  private categories : Category[]=[];

  constructor(private restService: RestService){
    this.restService.getCategories().subscribe(
      categories => this.categories = categories,
    );
  }
  ngOnInit(): void {

  }

  getCategory(id : number) : Category{
    return this.categories.find(category => category.id === id) as Category;
  }
  getCategories(): Category[]{
    return this.categories;
  }

}
