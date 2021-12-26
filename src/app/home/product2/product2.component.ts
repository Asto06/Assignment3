import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
})
export class Product2Component implements OnInit {
  constructor() {}
  faHeart = faHeart;
  faEye = faEye;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;

  newProduct = [
    {
      Image: '../../assets/images/product-1.png',
      h3: 'NICARAGUA COFFEE BEANS',
      Discount: 'IDR 145.000',
      Price: 'IDR 250.000',
      Sold: 'Sold 100 Item',
    },
    {
      Image: '../../assets/images/product-2.png',
      h3: 'COLOMBIA COFFEE BEANS',
      Discount: 'IDR 175.000',
      Price: 'IDR 220.000',
      Sold: 'Sold 100 Item',
    },
    {
      Image: '../../assets/images/product-3.png',
      h3: 'PERU WHOLE COFFEE BEANS',
      Discount: 'IDR 125.000',
      Price: 'IDR 180.000',
      Sold: 'Sold 100 Item',
    },
  ];

  ngOnInit(): void {}
}
