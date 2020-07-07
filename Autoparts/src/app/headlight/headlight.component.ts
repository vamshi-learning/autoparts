import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';

@Component({
    
    selector: 'headlight',
    templateUrl: 'headlight.component.html',
    styleUrls: ['headlight.component.css']
})
export class HeadlightComponent implements OnInit {

    products: any = [];

    constructor(
     
      private myMainService: MyMainService,
      private mySharedService: MySharedService
  ) {
     
  }
  
  ngOnInit() {
     
      this.myMainService.getProducts().subscribe(data => {
          this.products = (data as any).products;
        });
  }
}
