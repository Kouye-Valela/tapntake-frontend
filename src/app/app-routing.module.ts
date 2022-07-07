import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopmenuComponent } from './components/shopmenu/shopmenu.component';
import { CartComponent } from './components/cart/cart.component';
import { ThankyouComponent} from './components/thankyou/thankyou.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'shopmenu',component:ShopmenuComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'thankyou',component:ThankyouComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
