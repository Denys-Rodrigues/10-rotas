import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
{path:"first-component", component:FirstComponent},
{path:"second-component", component:SecondComponent},
{path:"cliente-component", component:ClienteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
