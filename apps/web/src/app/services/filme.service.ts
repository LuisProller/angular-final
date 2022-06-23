import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Filme as IFilme } from '@cefwm-angular/common';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(
    private httpClient: HttpClient,
    ) {
   }

   public getAll(): Observable<IFilme[]> {
    return this.httpClient.get<IFilme[]>(
      'http://localhost:3333/api/filmes',
    ).pipe(
    );
  }
}
