import { TestBed } from '@angular/core/testing';

import { GlossTokenizerService } from './gloss-tokenizer.service';

describe('GlossTokenizerService', () => {
  let service: GlossTokenizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlossTokenizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
