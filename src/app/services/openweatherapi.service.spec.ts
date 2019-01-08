import { TestBed } from '@angular/core/testing';

import { OpenweatherapiService } from './openweatherapi.service';

describe('OpenweatherapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenweatherapiService = TestBed.get(OpenweatherapiService);
    expect(service).toBeTruthy();
  });
});
