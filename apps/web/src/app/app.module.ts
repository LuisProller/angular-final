import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaFilmesComponent } from './components/lista-filmes/lista-filmes.component';
import { FilmeEdicaoModule } from './modules/filme-edicao/filme-edicao.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ListaFilmesComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    FilmeEdicaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
