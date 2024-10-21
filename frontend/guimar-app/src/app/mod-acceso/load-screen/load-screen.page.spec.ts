import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadScreenPage } from './load-screen.page';

describe('LoadScreenPage', () => {
  let component: LoadScreenPage;
  let fixture: ComponentFixture<LoadScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
