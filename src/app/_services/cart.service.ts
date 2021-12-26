import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cart } from '../_models/Carts';
import { ProductService } from './product.service';
import { TokenStorageService } from './token-storage.service';

const API_URL = `${environment.API_URL}api/`;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  addCartDatabase(item: string) {
    const idUser = this.tokenStorage.getUser().data._id;
    return this.http.post<{ product: object; user: object }>(
      API_URL + 'cart/create',
      { product: item, user: idUser }
    );
  }

  getCartDatabase(): Observable<Cart[]> {
    const idUser = this.tokenStorage.getUser().data._id;
    return this.http.get<Cart[]>(API_URL + 'cart/' + idUser);
  }

  deleteCartDatabase(id: string): Observable<Cart> {
    return this.http.delete<Cart>(API_URL + 'cart/delete/' + id);
  }
}
