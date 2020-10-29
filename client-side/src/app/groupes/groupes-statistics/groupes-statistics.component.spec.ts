import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesStatisticsComponent } from './groupes-statistics.component';

describe('GroupesStatisticsComponent', () => {
  let component: GroupesStatisticsComponent;
  let fixture: ComponentFixture<GroupesStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupesStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
