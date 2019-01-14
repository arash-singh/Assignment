import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './layout/header.component';
import { AppFooterComponent } from './layout/footer.component';
import { ProductListComponent } from './product/productlist.component';
import { ProductDetailComponent } from './product/productdetail.component';
import { RecommendationComponent } from './product/recommendation.component';
import { ProductService } from './product/service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'search/:id', component: ProductListComponent, pathMatch: 'full' },
      { path: 'product/:id', component: ProductDetailComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
