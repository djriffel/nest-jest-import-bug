import { Module } from '@nestjs/common';
import { SomeLibService } from './some-lib.service';

@Module({
  providers: [SomeLibService],
  exports: [SomeLibService],
})
export class SomeLibModule {}
