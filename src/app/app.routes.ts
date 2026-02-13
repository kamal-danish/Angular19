import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
//     {path:'',redirectTo:()=>{
//         const auth=inject(AuthService)
//         if(auth.isLoggedIn()){
//            return '/dashboard';
//         }
//         return 'login'
//     },pathMatch:'full'
// },
{path:'',loadComponent:()=> import('./home/home.component').then((m)=>m.HomeComponent) },
{path:'about',component:AboutComponent },
{path:'signal',loadComponent:()=>import('./signal/signal.component').then((m)=>m.SignalComponent)},
{path:'user',loadComponent:()=>import('./store/users/user/user.component').then((m)=>m.UserComponent)}
];
