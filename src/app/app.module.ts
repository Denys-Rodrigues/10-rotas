import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecondComponent,
    FirstComponent,
    ClienteComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
