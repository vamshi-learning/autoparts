import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';

@Component({
  
    selector: 'tyres',
    templateUrl: 'tyres.component.html',
    styleUrls: ['tyres.component.scss']
})
export class TyresComponent implements OnInit {

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
