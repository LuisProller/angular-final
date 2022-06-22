import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeEdicaoComponent } from './filme-edicao.component';

describe('FilmeEdicaoComponent', () => {
  let component: FilmeEdicaoComponent;
  let fixture: ComponentFixture<FilmeEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
