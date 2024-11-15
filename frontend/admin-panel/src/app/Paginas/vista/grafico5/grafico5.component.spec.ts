import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafico5Component } from './grafico5.component';

describe('Grafico5Component', () => {
  let component: Grafico5Component;
  let fixture: ComponentFixture<Grafico5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafico5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafico5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
