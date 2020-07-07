import { Component,  OnInit} from '@angular/core';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';

@Component({
    
    selector: 'foglight',
    templateUrl: 'foglight.component.html',
    styleUrls: ['foglight.component.css']
})
export class FoglightComponent implements OnInit{
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
