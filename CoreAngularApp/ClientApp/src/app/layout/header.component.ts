import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class AppHeaderComponent {
  keyword: string;

  constructor(private router: Router) {
  }

  public Search() {
    this.router.navigate(['/search', this.keyword]);
  }
}
