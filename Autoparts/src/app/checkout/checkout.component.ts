import { Component } from '@angular/core';
import { MySharedService } from '../shared.service';
@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {

    name:string ='';
    city:string='';
   state:string='';
   cname:string='';
   ccity:string='';
   cstate:string='';
     

   constructor(
    private mySharedService: MySharedService,
   
  ) { }
   filladdress1($event){
    if($event.target.checked== true){
       
   this.cname=this.name;
   this.ccity=this.city;
   this.cstate=this.state;
    
    }else
    {
      this.cname="";
      this.ccity="";
      this.cstate="";
    }
    
  }
}
