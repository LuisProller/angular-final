import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FilmeEdicaoRoutingModule } from './filme-edicao-routing.module';
import { FilmeEdicaoComponent } from './components/filme-edicao/filme-edicao.component';


@NgModule({
  declarations: [
    FilmeEdicaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FilmeEdicaoRoutingModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class FilmeEdicaoModule { }
