import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent {
  public viewMode: string;
  public productList: any;
  private keyword: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) {    
    this.viewMode = 'list';
    this.route.params.subscribe(params => {
      this.keyword = params['id'];
      if (this.keyword) {
        this.getSearchData();
      }
    });    
  }

  private getSearchData() {
    //Call API to Get Search Results
    this.productService.searchItems(this.keyword).subscribe(data => {
      this.productList = data.items;
      //Call API to get search result details
    }, error => { console.log(error); }
    );
  }

  public SetViewMode(mode: any):void {
    this.viewMode = mode;
  }
}
