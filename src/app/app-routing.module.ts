import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"",redirectTo:'/ajout',pathMatch:"full"},
  {path:'ajout',component:AjoutComponent},
  {path:'list',component:ListComponent},
  {path:'edite/:id',component:UpdateComponent},
  {path:"details/:id",component:DetailsComponent},
  //lezem ikoun e5er path eli howa not found
  {path:"**",component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
