import { Component, OnInit } from '@angular/core';
import { MySharedService } from '../shared.service';

@Component({
  selector: 'cart-component',
  template: `
 
    <div  *ngIf="cartItems && cartItems.length > 0">
        <ul>
        <li *ngFor="let item of cartItems">
          <img class="card-img-top" src="{{item.image}}" alt="Card image cap">
          <h3>{{item.name}}</h3> 
          <button type="button"  class="close text-right" aria-label="Remove Item" (click)="removeItemFromCart(item.id)">
          <span aria-hidden="true">&times;</span>
        </button>    
          <span>{{item.price  | currency:'INR'}}</span>    
        </li>
      </ul>
      <div class="dropdown-divider"></div>
      <div class="cart-total">
       <p class="text-right">     
        <strong class="d-block">Total:{{ grandtotal | currency:'INR'}}</strong>
        </p>
       </div>
       <p><button type="button" class="btn btn-outline-primary btn-sm" (click)="emptyCart()">Empty Cart</button></p>
       <button routerLink="/cart" class="btn btn-outline-primary btn-sm">CART</button>
       <button routerLink="/checkout" class="btn btn-outline-primary btn-sm">CHECKOUT</button>
       </div>
    <div  *ngIf="cartItems && !(cartItems.length > 0)">
    <p>Shopping cart is empty</p>
  </div>
   
    `
})
export class CartdialogComponent implements OnInit {
 
   cartItems;
  grandtotal;
  constructor(
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data => {
      this.cartItems = data;
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
      this.grandtotal = this.mySharedService.getTotalPrice();
     
    });
   
    

  }

  // Remove item from cart list
  removeItemFromCart(productId) {
    /* this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.mySharedService.removeProductFromCart(productId);

  }

  emptyCart() {
    this.mySharedService.emptryCart();
  }

}