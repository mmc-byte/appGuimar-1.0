import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafico6Component } from './grafico6.component';

describe('Grafico6Component', () => {
  let component: Grafico6Component;
  let fixture: ComponentFixture<Grafico6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafico6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafico6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
