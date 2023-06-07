import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  public selectedCategory? : Category;
  public selectedPage =1;

  @Output() category = new EventEmitter<Category>();
  @Output() page = new EventEmitter<number>();

  @Input() categories : Category[]= [];

  changeCategory(newCategory?: Category){
    this.selectedCategory = newCategory;
    this.selectedPage=1;
    this.category.emit(newCategory);
    this.page.emit(1);
  }
}
