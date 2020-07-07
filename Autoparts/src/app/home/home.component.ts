import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({ 
   
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
     
})
export class HomeComponent implements OnInit, OnDestroy {
    products: any = [];
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    event_list = [
        {img:'../assets/images/slide1.jpg'},{img:'../assets/images/slide3.jpg'},{img:'../assets/images/slide2.jpg'}]
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private myMainService: MyMainService,
        private mySharedService: MySharedService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers;
        this.myMainService.getProducts().subscribe(data => {
            this.products = (data as any).products;
          });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
   
   
}