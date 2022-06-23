import { Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import {
  map,
  takeUntil,
} from 'rxjs/operators';

import { Filme as IFilme } from '@cefwm-angular/common';

import { FilmeEdicaoService } from '../../services/filme-edicao.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'cefwm-angular-filme-edicao',
  templateUrl: './filme-edicao.component.html',
  styleUrls: ['./filme-edicao.component.css']
})
export class FilmeEdicaoComponent implements OnInit {

  public titulo: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public sinopse: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public cartaz: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public url: FormControl = new FormControl(
    '',
    Validators.required,
  );
  public formGroup: FormGroup = new FormGroup({
    titulo: this.titulo,
    sinopse: this.sinopse,
    cartaz: this.cartaz,
    url: this.url,
  })

  private subDestruction: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmeEdicaoService: FilmeEdicaoService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        const artigoId: number = +params['id-artigo'];
        return artigoId;
      }),
      takeUntil(this.subDestruction),
    ).subscribe((id: number) => {
      this.filmeEdicaoService.get(id).pipe(
        takeUntil(this.subDestruction),
      ).subscribe((f: IFilme) => {
        this.formGroup.setValue({
          titulo: f.titulo,
          sinopse: f.sinopse,
          cartaz: f.cartaz,
          url: f.url,
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }

  public enviarForm(json: unknown) {

  }
}
