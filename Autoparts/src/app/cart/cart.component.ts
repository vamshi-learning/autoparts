import { Component,OnInit } from '@angular/core';
import { MySharedService } from '../shared.service';
import { reduce } from 'rxjs/operators';
@Component({
   
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any;
cartItems;
product: any;
grandtotal;

    constructor(
        private mySharedService: MySharedService,
       
      ) { }
    ngOnInit() {
       this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
       this.grandtotal = this.mySharedService.getTotalPrice();
        }

        removeItemFromCart(productId) {
            this.mySharedService.removeProductFromCart(productId);
            this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
            this.grandtotal = this.mySharedService.getTotalPrice();
          }
       updatecart(){
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
       }  
     
        
}
