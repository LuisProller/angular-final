import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Filme as IFilme } from '@cefwm-angular/common';

import { FilmeService } from '../../services/filme.service';

@Component({
  selector: 'cefwm-angular-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  public filmes$: Observable<IFilme[]> = this.filmeService.getAll();

  constructor(
    private filmeService: FilmeService,
  ) { }

  ngOnInit(): void {
  }

}
