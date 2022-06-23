import { TestBed } from '@angular/core/testing';

import { FilmeEdicaoService } from './filme-edicao.service';

describe('FilmeEdicaoService', () => {
  let service: FilmeEdicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeEdicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
