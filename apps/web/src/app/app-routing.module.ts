import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ListaFilmesComponent } from "./components/lista-filmes/lista-filmes.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/lista-filmes',
  },
  {
    path: 'home',
    component: HomeComponent,
        children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista-filmes',
      },
      {
        path: 'lista-filmes',
        component: ListaFilmesComponent,
      },
      {
        path: 'editar-filme',
        loadChildren: () => import(
          './modules/filme-edicao/filme-edicao.module'
        ).then(mod => mod.FilmeEdicaoModule),
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
