import { Metadata } from '@grpc/grpc-js';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  checkUrlStatus(data:string,metadata:Metadata): string {
    Logger.log(data)
    return data;
  }
}
