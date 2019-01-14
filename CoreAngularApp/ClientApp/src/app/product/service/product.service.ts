import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  //constructor
  constructor(private http: HttpClient) {
  }

  searchItems(key:string): Observable<any> {
    //return this.http.get("/api/search?key=" + key);
    return this.http.get('/search-api1.json');
  }

  getProductDetail(id: string): Observable<any> {
    //return this.http.get("/api/product?id=" + id);
    return this.http.get('/product-lookup.json');
  }

  getProductRecommendations(id: string): Observable<any> {
    //return this.http.get("/api/product/GetRecommendations?id=" + id);
    return this.http.get('/product-recommendations.json');
  }
}
