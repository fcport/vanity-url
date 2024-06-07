import { TestBed } from '@angular/core/testing';

import { SettingsFromUrlService } from './settings-from-url.service';

describe('SettingsFromUrlService', () => {
  let service: SettingsFromUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsFromUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
