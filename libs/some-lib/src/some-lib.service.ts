import { Injectable } from '@nestjs/common';

@Injectable()
export class SomeLibService {
  public static someMethod() {
    console.log('Ran some method.');
  }
}
