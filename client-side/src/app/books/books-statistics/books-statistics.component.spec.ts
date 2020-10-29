import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStatisticsComponent } from './books-statistics.component';

describe('BooksStatisticsComponent', () => {
  let component: BooksStatisticsComponent;
  let fixture: ComponentFixture<BooksStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
