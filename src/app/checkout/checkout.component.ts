import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../_models/Carts';
import { CartService } from '../_services/cart.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  isLoggedIn = false;
  cartDB: Cart[] = [];
  totalPrice: number = 0;
  value: number = 1;
  shipping: number = 30000;
  total2: number = 0;

  constructor(
    private cartService: CartService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.cartService.getCartDatabase().subscribe((data) => {
        this.cartDB = data;
        console.log(data);
      });
    } else {
      this.router.navigate(['login']);
    }
  }

  deleteCart(id: string): void {
    this.cartService.deleteCartDatabase(id).subscribe((data) => {
      window.location.reload();
    });
  }

  total(amount: string, price: number | undefined): void {
    this.value = parseInt(amount);
    if (this.value > 1) {
      this.totalPrice = parseInt(amount) * price!;
    } else {
      this.totalPrice = price!;
    }
    console.log(this.totalPrice);
    this.total2 = this.totalPrice + this.shipping;
  }
}
