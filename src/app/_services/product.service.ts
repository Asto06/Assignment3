import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Products } from '../_models/Products';

const API_URL = `${environment.API_URL}api/`;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(API_URL + 'product');
  }
}
