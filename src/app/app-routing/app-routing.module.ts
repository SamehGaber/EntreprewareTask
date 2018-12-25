import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import {SearchComponent} from '../search/search.component';
import {CurrentDataComponent} from '../current-data/current-data.component';
const routes:Routes= [
  {path:'home',component: HomeComponent},
  {path:'search',component: SearchComponent},
  {path:'currentData',component: CurrentDataComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
