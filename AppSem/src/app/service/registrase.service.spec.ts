import { TestBed } from '@angular/core/testing';

import { RegistraseService } from './registrase.service';

describe('RegistraseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistraseService = TestBed.get(RegistraseService);
    expect(service).toBeTruthy();
  });
});
