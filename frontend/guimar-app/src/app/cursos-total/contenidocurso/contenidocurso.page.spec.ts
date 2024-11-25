import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidocursoPage } from './contenidocurso.page';

describe('ContenidocursoPage', () => {
  let component: ContenidocursoPage;
  let fixture: ComponentFixture<ContenidocursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidocursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
