import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScubiPage } from './scubi.page';

describe('ScubiPage', () => {
  let component: ScubiPage;
  let fixture: ComponentFixture<ScubiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScubiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
