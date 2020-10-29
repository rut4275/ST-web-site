import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNewOrderComponent } from './books-new-order.component';

describe('BooksNewOrderComponent', () => {
  let component: BooksNewOrderComponent;
  let fixture: ComponentFixture<BooksNewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksNewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
