import { Component, OnInit } from '@angular/core';
import { MySharedService } from '../shared.service';

@Component({
  selector: 'header-component',
  //templateUrl: './header.component.html',
  template: `
<span class="cart-count" class="badge badge-info">
<i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
<em>{{cartProductCount}}</em>
  </span>
  `
})
export class HeaderComponent implements OnInit {
 cartProductCount: number = 0;

  constructor(
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data => {
      this.cartProductCount = data.length;
    })
  }
}