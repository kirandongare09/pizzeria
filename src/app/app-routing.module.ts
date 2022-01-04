import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuildUrPizzaComponent } from './build-ur-pizza/build-ur-pizza.component';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { AddCartComponent } from './add-cart/add-cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"order-pizza",component:OrderPizzaComponent},
  {path:"build-ur-pizza",component:BuildUrPizzaComponent},
  {path:"addCart",component:AddCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
