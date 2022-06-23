import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Filme as IFilme,
} from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root',
})
export class FilmeEdicaoService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public get(id: number): Observable<IFilme> {
    return this.httpClient.get<IFilme>(
      `http://localhost:3333/api/filmes/${id}`,
    );
  }

}
