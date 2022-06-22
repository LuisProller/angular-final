import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeEdicaoRoutingModule } from './filme-edicao-routing.module';
import { FilmeEdicaoComponent } from './components/filme-edicao/filme-edicao.component';


@NgModule({
  declarations: [
    FilmeEdicaoComponent
  ],
  imports: [
    CommonModule,
    FilmeEdicaoRoutingModule
  ]
})
export class FilmeEdicaoModule { }
