import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallePlanComponent } from './salle-plan.component';

describe('SallePlanComponent', () => {
  let component: SallePlanComponent;
  let fixture: ComponentFixture<SallePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
