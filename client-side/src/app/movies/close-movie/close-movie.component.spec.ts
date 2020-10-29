import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseMovieComponent } from './close-movie.component';

describe('CloseMovieComponent', () => {
  let component: CloseMovieComponent;
  let fixture: ComponentFixture<CloseMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
