import { Routes } from "@angular/router/src";

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import { RestaurantsComponent } from "app/restaurants/restaurants.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurant', component: RestaurantsComponent},
  {path: 'about', component: AboutComponent}
]
