import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeNoSession } from './h-no-session.page';

describe('HSinconexionPage', () => {
  let component: HomeNoSession;
  let fixture: ComponentFixture<HomeNoSession>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
