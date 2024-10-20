import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuerpoAppPage } from './cuerpo-app.page';

describe('CuerpoAppPage', () => {
  let component: CuerpoAppPage;
  let fixture: ComponentFixture<CuerpoAppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
