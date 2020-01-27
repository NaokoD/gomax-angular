import { TestBed } from '@angular/core/testing';

import { SallePlanService } from './salle-plan.service';

describe('SallePlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SallePlanService = TestBed.get(SallePlanService);
    expect(service).toBeTruthy();
  });
});
