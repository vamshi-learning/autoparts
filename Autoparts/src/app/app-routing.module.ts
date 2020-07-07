import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { CartComponent } from './cart/cart.component';
import {  CheckoutComponent } from './checkout/checkout.component';
import { FoglightComponent } from './foglight/foglight.component';
import { HeadlightComponent } from './headlight/headlight.component';
import { TurnsignalComponent } from './turnsignal/turnsignal.component';
import { TyresComponent } from './tyres/tyres.component';
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'cart', component:  CartComponent },
    { path: 'checkout', component:  CheckoutComponent },
    { path: 'foglight', component: FoglightComponent },
    { path: 'headlight', component: HeadlightComponent },
    { path: 'turnsignal', component: TurnsignalComponent },
    { path: 'tyres', component: TyresComponent  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);