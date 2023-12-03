import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  logicToSayGoodbye(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
