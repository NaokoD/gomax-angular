import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeRowComponent } from './siege-row.component';

describe('SiegeRowComponent', () => {
  let component: SiegeRowComponent;
  let fixture: ComponentFixture<SiegeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiegeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiegeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
