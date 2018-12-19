import { TestBed, inject } from '@angular/core/testing';

import { GithubserviceService } from './githubservice.service';

describe('GithubserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubserviceService]
    });
  });

  it('should be created', inject([GithubserviceService], (service: GithubserviceService) => {
    expect(service).toBeTruthy();
  }));
});
