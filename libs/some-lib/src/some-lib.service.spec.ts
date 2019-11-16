import { Test, TestingModule } from '@nestjs/testing';
import { SomeLibService } from './some-lib.service';

describe('SomeLibService', () => {
  let service: SomeLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomeLibService],
    }).compile();

    service = module.get<SomeLibService>(SomeLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
