import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesEditComponent } from './groupes-edit.component';

describe('GroupesEditComponent', () => {
  let component: GroupesEditComponent;
  let fixture: ComponentFixture<GroupesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
