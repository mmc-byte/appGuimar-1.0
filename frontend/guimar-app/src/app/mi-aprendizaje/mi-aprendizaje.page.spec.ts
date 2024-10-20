import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiAprendizajePage } from './mi-aprendizaje.page';

describe('MiAprendizajePage', () => {
  let component: MiAprendizajePage;
  let fixture: ComponentFixture<MiAprendizajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAprendizajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
