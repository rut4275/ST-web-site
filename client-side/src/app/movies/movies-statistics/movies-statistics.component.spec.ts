import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesStatisticsComponent } from './movies-statistics.component';

describe('MoviesStatisticsComponent', () => {
  let component: MoviesStatisticsComponent;
  let fixture: ComponentFixture<MoviesStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
