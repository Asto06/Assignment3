import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../_models/Products';

const API_URL = 'http://localhost:6060/api/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(API_URL + 'product');
  }
}
