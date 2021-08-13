import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSideBarComponent } from './department-side-bar.component';

describe('DepartmentSideBarComponent', () => {
  let component: DepartmentSideBarComponent;
  let fixture: ComponentFixture<DepartmentSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
