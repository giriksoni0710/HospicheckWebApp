import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHospitalViewComponent } from './single-hospital-view.component';

describe('SingleHospitalViewComponent', () => {
  let component: SingleHospitalViewComponent;
  let fixture: ComponentFixture<SingleHospitalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHospitalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHospitalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
