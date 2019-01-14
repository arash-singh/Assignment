import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  //constructor
  constructor(private http: HttpClient) {
  }

  searchItems(key:string): Observable<any> {
    return this.http.get("/api/search?key=" + key);
  }

  getProductDetail(id: string): Observable<any> {
    return this.http.get("/api/product?id=" + id);
  }

  getProductRecommendations(id: string): Observable<any> {
    return this.http.get("/api/product/GetRecommendations?id=" + id);
  }
}
