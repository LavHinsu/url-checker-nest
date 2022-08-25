// import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('UrlService', 'CheckUrl')
  checkUrlStatus(data: RequestData): Promise<ReturnValue> {
    return this.appService.checkUrlStatus(data);
  }
}
