import { Metadata, ServerDuplexStream, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface ReturnValue {
  status: string,
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @GrpcMethod('UrlService', 'CheckUrl')
  checkUrlStatus(data: string, metadata: Metadata) :ReturnValue {
    Logger.log(data)
    return { "status": "2" };
  }
}