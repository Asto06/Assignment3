import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Products } from '../_models/Products';
import { CartService } from '../_services/cart.service';
import { ProductService } from '../_services/product.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent implements OnInit {
  // productitem = [
  //   {
  //     Image: '../../assets/images/all-product/5edf5cfe77934119523990.jpg',
  //     TitleProduct: 'kintamani',
  //     description:
  //       'c',
  //     Price: '145.000',
  //   },
  //   {
  //     Image: '../../assets/images/all-product/5eddca5deef9d941043832.jpg',
  //     TitleProduct: 'Gayo',
  //     description:
  //       'the best coffee in the world. good think you drink in the morning or afternoon',
  //   },
  //   {
  //     Image: '../../assets/images/all-product/5edf621a2de4d817814801.jpg',
  //     TitleProduct: 'Gayo',
  //     description:
  //       'the best coffee in the world. good think you drink in the morning or afternoon',
  //   },
  //   {
  //     Image: '../../assets/images/all-product/601b5b1f198e9893838597.jpg',
  //     TitleProduct: 'Gayo',
  //     description:
  //       'the best coffee in the world. good think you drink in the morning or afternoon',
  //   },
  // ];

  productitem: Products[] = [];
  isLoggedIn = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    this.productService.getProduct().subscribe((product) => {
      this.productitem = product;
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
