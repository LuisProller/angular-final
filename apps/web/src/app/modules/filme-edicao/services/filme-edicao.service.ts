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
      `/api/filmes/${id}`,
    );
  }

  public put(filme: IFilme): Observable<string> {
    return this.httpClient.put<string>(
      `/api/filmes/${filme._id}`,
      filme,
    );
  }

}
