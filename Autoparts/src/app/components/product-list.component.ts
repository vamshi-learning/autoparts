import { Component, Input, OnInit, Renderer2 } from '@angular/core';

import { MySharedService } from '../shared.service';

@Component({
  selector: 'product-list-component',
  template: `<section class="carousel slide" data-ride="carousel" id="postsCarousel">
<div class="container">
   <h3 style="float: left;text-align: left;">Featured Products</h3>
   <div class="col-12 text-right m-4">
     <a class="btn btn-outline-secondary prev" data-target="#postsCarousel" data-slide="prev" title="go back"><i class="fa fa-lg fa-chevron-left"></i></a>
        <a class="btn btn-outline-secondary next" data-target="#postsCarousel" data-slide="next" title="more"><i class="fa fa-lg fa-chevron-right"></i></a>
   </div>
   <div class="dropdown-divider"></div>
   </div>
     <div class="container p-t-0 m-t-2 carousel-inner">
       <div class="row row-equal carousel-item active m-t-0">
           <div class="col-md-4" *ngFor='let product of products | slice:0:3;let i = index;'>
             <div class="card">
               <img [src]="product.image" alt="Denim Jeans" style="width:100%">
               <h1>{{product.name}}</h1>
               <p class="price">{{product.price}}</p>
               <p>{{product.description}}</p>
               <div class="text-center">
                  <button type="button" class="btn btn-sm" [ngClass]="this.isAdded[i] ? 'btn-success' : 'btn-outline-secondary'" (click)="addToCart($event, product.id)">Add To Cart</button>
                </div>
             </div>
           </div>
           </div>
       <div class="row row-equal carousel-item m-t-0">
           <div class="col-md-4" *ngFor='let  product of products | slice:3:6;let i = index;'>
             <div class="card">
             <img [src]="product.image" alt="Denim Jeans" style="width:100%">
             <h1>{{product.name}}</h1>
             <p class="price">{{product.price}}</p>
             <p>{{product.description}}</p>
             <div class="text-center">
                <button type="button" class="btn btn-sm" [ngClass]="this.isAdded[i] ? 'btn-success' : 'btn-outline-secondary'" (click)="addToCart($event, product.id)">Add To Cart</button>
              </div>
             </div>
           </div>
       </div>
   </div>
</section>
<section class="carousel slide" data-ride="carousel" id="postsCarousel1">
<div class="container">
   <h3 style="float: left;text-align: left;">New Arrivals</h3>
   <div class="col-12 text-right m-4">
     <a class="btn btn-outline-secondary prev" data-target="#postsCarousel1" data-slide="prev" title="go back"><i class="fa fa-lg fa-chevron-left"></i></a>
        <a class="btn btn-outline-secondary next" data-target="#postsCarousel1" data-slide="next" title="more"><i class="fa fa-lg fa-chevron-right"></i></a>
   </div>
   <div class="dropdown-divider"></div>
   </div>
     <div class="container p-t-0 m-t-2 carousel-inner">
       <div class="row row-equal carousel-item active m-t-0">
           <div class="col-md-4" *ngFor='let product of products | slice:0:3;let i = index;'>
             <div class="card">
               <img [src]="product.image" alt="Denim Jeans" style="width:100%">
               <h1>{{product.name}}</h1>
               <p class="price">{{product.price}}</p>
               <p>{{product.description}}</p>
               <div class="text-center">
                  <button type="button" class="btn btn-sm" [ngClass]="this.isAdded[i] ? 'btn-success' : 'btn-outline-secondary'" (click)="addToCart($event, product.id)">Add To Cart</button>
                </div>
             </div>
           </div>
           </div>
       <div class="row row-equal carousel-item m-t-0">
           <div class="col-md-4" *ngFor='let  product of products | slice:3:6;let i = index;'>
             <div class="card" >
             <img [src]="product.image" alt="Denim Jeans" style="width:100%">
             <h1>{{product.name}}</h1>
             <p class="price">{{product.price}}</p>
             <p>{{product.description}}</p>
             <div class="text-center">
                <button type="button" class="btn btn-sm" [ngClass]="this.isAdded[i] ? 'btn-success' : 'btn-outline-secondary'" (click)="addToCart($event, product.id)">Add To Cart</button>
              </div>
             </div>
           </div>
       </div>
   </div>
</section>
`,
styleUrls: ['./styles.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: any = [];
 public  singleProduct;
  public isAdded;

  constructor(
    private renderer: Renderer2,
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {

    this.isAdded = new Array(this.products.length);
    this.isAdded.fill(false, 0, this.products.length);
    console.log('this.isAdded -> ', this.isAdded, this.products);

    this.mySharedService.getProducts().subscribe(data => {

      if (data && data.length > 0) {

      } else {
        this.products.map((item, index) => {
          this.isAdded[index] = false;
        });
      }

    });
  }

  
  // Add item in cart on Button click
  // ===============================

  addToCart(event, productId) {
    
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
     
    }
    this.products.reduce((acc, pr) => acc+= pr.num , 0);
    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.mySharedService.addProductToCart(this.singleProduct[0]);
  }
  calcTotalPrice(){
    return this.products.reduce((acc, pr) => acc+= pr.price* pr.num , 0).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }
}