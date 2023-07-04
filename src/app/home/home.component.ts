import { SuggestedProduct } from './../models/models';
import { Component,OnInit, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] =[
    {
    bannerimage: 'Banner/Baner_Mobile.png',
    category: {
      id: 0,
      category: 'electronics',
      subcategory: 'mobiles',
    },
  },
  {
    bannerimage: 'Banner/Baner_Laptop.png',
    category: {
      id: 0,
      category: 'electronics',
      subcategory: 'laptops',
    },
  },
  {
    bannerimage: 'Banner/Baner_Chair.png',
    category: {
      id: 0,
      category: 'furniture',
      subcategory: 'chair',
    },
  },
];
  constructor() {}

  ngOnInit(): void {
    
  }

}
