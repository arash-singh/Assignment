import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductDetailComponent {
  public productId: string;
  public productDetails: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.getProductDetails();
      }
    });
  }

  private getProductDetails() {
    //Call API to get product details
    this.productService.getProductDetail(this.productId).subscribe(data => {
      this.productDetails = data.items[0];      
    }, error => { console.log(error); }
    );
  }

}
