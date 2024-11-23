import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInfopersonalPage } from './modal-infopersonal.page';

describe('ModalInfopersonalPage', () => {
  let component: ModalInfopersonalPage;
  let fixture: ComponentFixture<ModalInfopersonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfopersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
