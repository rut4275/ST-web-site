import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOrdersComponent } from './books-orders.component';

describe('BooksOrdersComponent', () => {
  let component: BooksOrdersComponent;
  let fixture: ComponentFixture<BooksOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
