import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmeEdicaoComponent } from './components/filme-edicao/filme-edicao.component';

const routes: Routes = [
  {
    path: ':id-filme',
    component: FilmeEdicaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmeEdicaoRoutingModule { }
