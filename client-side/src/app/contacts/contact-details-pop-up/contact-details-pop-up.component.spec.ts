import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsPopUpComponent } from './contact-details-pop-up.component';

describe('ContactDetailsPopUpComponent', () => {
  let component: ContactDetailsPopUpComponent;
  let fixture: ComponentFixture<ContactDetailsPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
