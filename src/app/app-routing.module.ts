import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowclientsComponent } from './pagina/showclients/showclients.component'
import { AddclientComponent } from './pagina/addclient/addclient.component';
const routes: Routes = [
  {path: '', component: ShowclientsComponent},
  {path: 'contatos', component: ShowclientsComponent},
  {path: 'addclient', component: AddclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
