import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherComponentComponent } from './teacher-component.component';

describe('TeacherComponentComponent', () => {
  let component: TeacherComponentComponent;
  let fixture: ComponentFixture<TeacherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
