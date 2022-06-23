import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Filme as IFilme } from '@cefwm-angular/common';

import { FilmeService } from '../../services/filme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  public filmes$: Observable<IFilme[]> = this.filmeService.getAll();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filmeService: FilmeService,
  ) { }

  ngOnInit(): void {
  }

  public editar(filme: IFilme, event: Event): void {
    this.router.navigate([
      '..',
      'editar-filme',
      filme._id,
    ], {
      relativeTo: this.activatedRoute,
    });
    event.preventDefault();
  }
}
