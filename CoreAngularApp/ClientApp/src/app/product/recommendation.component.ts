import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls:['recommendation.component.css']
})

export class RecommendationComponent implements OnChanges {
  @Input() id: string;
  productRecommendation: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {   
  }

  ngOnChanges(changes: any): void {
    //On change of id input parameter call service to get results
    var productId: any = changes.id.currentValue;
    if (productId) {
      this.getProductRecommendations();
    }
  }

  private getProductRecommendations() {
    //Call API to get product recommendations
    this.productService.getProductRecommendations(this.id).subscribe(data => {
      console.log(data);
      this.productRecommendation = data;
      //Call API to get recommended products details
    }, error => { console.log(error); }
    );
  }
}
