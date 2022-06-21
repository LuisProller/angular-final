import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabMenuModule } from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaFilmesComponent } from './components/lista-filmes/lista-filmes.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ListaFilmesComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
