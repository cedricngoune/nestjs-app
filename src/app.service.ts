import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      version: "0.0.1",
      message: "Hello world",
      data: {}
    };
  }
}
