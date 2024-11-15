import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafico3Component } from './grafico3.component';

describe('Grafico3Component', () => {
  let component: Grafico3Component;
  let fixture: ComponentFixture<Grafico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafico3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
