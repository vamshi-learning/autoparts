import { Component,ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { MySharedService } from './shared.service';
@Component({ selector: 'app-root', templateUrl: 'app.component.html', styleUrls: [ './app.component.css' ] })
export class AppComponent  {
 
  cartItems;
 currentUser: User;
public show:boolean = false;
public isMenuCollapsed = true;


constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private mySharedService: MySharedService
       ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

   

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
     myFunction()
      {
       this.show=!this.show;
            
}
onClickedOutside(e: Event) {
  this.show=false;
}
filterFunction() 
{
    
   let input, filter,ul, li, a, i,div,txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   div = document.getElementById("myDropdown");
   a = div.getElementsByTagName("a");
   for (i = 0; i < a.length; i++) {
     txtValue = a[i].textContent || a[i].innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       a[i].style.display = "";
     } else {
       a[i].style.display = "none";
     }
   }
 }      
         mybutton:any = document.getElementById("button1");
         topFunction() {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }  
}