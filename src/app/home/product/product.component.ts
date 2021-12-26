import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/_models/Products';
import { CartService } from 'src/app/_services/cart.service';
import { ProductService } from 'src/app/_services/product.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // discProduct = [
  //   {
  //     Image: '../../../assets/images/product1/f1-removebg-preview.png',
  //     Title: 'Kintamani Coffee',
  //     discPrice: 'Rp 80.000',
  //     Price: 'Rp 120.000',
  //   },
  //   {
  //     Image: '../../../assets/images/product1/f2-removebg-preview.png',
  //     Title: 'Kintamani Coffee',
  //     discPrice: 'Rp 80.000',
  //     Price: 'Rp 120.000',
  //   },
  //   {
  //     Image: '../../../assets/images/product1/f3_-removebg-preview.png',
  //     Title: 'Luwak Coffee',
  //     discPrice: 'Rp 180.000',
  //     Price: 'Rp 220.000',
  //   },
  //   {
  //     Image: '../../../assets/images/product1/f4_-removebg-preview.png',
  //     Title: 'Kintamani Coffee',
  //     discPrice: 'Rp 80.000',
  //     Price: 'Rp 120.000',
  //   },
  // ];

  discProduct: Products[] = [];
  isLoggedIn = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    this.productService.getProduct().subscribe((product) => {
      this.discProduct = product;
    });
  }

  addCart(item: string): void {
    if (this.isLoggedIn) {
      this.cartService.addCartDatabase(item).subscribe((data) => {
        console.log('Cart Berhasil di Add!');
        setTimeout(() => {
          window.location.href = 'checkout';
        }, 1000);
      });
    } else {
      setTimeout(() => {
        window.location.href = 'login';
      }, 1000);
    }
  }
}
