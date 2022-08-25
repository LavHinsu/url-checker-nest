import { Metadata } from '@grpc/grpc-js';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  checkUrlStatus(data:RequestData,metadata:Metadata): ReturnValue {
    Logger.log('requested to check url: ' + data.url)
    return { "status": data.url };
  }
}
