import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMovieComponent } from './open-movie.component';

describe('OpenMovieComponent', () => {
  let component: OpenMovieComponent;
  let fixture: ComponentFixture<OpenMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
