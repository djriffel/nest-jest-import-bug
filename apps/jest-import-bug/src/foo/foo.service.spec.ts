// import { SomeLibService } from '@app/some-lib';
import { SomeLibService } from '@app/some-lib/some-lib.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FooService } from './foo.service';

describe('FooService', () => {
  let service: FooService;

  beforeEach(async () => {
    SomeLibService.someMethod();

    const module: TestingModule = await Test.createTestingModule({
      providers: [FooService],
    }).compile();

    service = module.get<FooService>(FooService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
