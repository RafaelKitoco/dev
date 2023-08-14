import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TermosComponent } from './components/termos/termos.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"form-fluxodevcamp", component:FormComponent},
  {path:"politica-uso-fluxodevcamp",  component:TermosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
