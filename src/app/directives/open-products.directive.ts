import { Router } from '@angular/router';
import { Category } from './../models/models';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OpenProducts]'
})
export class OpenProductsDirective {

  @Input() category: Category = {
    id: 0,
    category: '',
    subcategory: ''
  };
  @HostListener('click') openProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        category: this.category.category,
        subcategory: this.category.subcategory,
      },
    });
  }

  constructor(private router: Router) {}

}
