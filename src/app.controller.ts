import { Metadata, ServerDuplexStream, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @GrpcMethod('UrlService', 'CheckUrl')
  checkUrlStatus(data: RequestData, metadata: Metadata) : Promise<ReturnValue> {
    return this.appService.checkUrlStatus(data,metadata)
  }
}