import { inject, TestBed } from '@angular/core/testing';

import { NovelService } from './novel.service';

describe('NovelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovelService]
    });
  });

  it('should be created', inject([NovelService], (service: NovelService) => {
    expect(service).toBeTruthy();
  }));
});
