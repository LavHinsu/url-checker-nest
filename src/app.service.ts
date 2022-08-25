// import { Metadata } from '@grpc/grpc-js';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  async checkUrlStatus(data: RequestData): Promise<ReturnValue> {

    Logger.log('requested to check url: ' + data.url);

    let GrpcResponse : string = 'clear_url'

    const formdata = new FormData();

    formdata.append('url', data.url);

    const requestOptions: RequestInit = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const res = await fetch('https://urlhaus-api.abuse.ch/v1/url/', requestOptions)
      .then((response) => response.json())
      .catch((error) => Logger.log('error', error));

    if(res.query_status == "invalid_url"){
      GrpcResponse = 'bad_url'
    }
    else if(res.threat !== undefined){
      Logger.warn(`possible ${res.threat} found for url: ${data.url}`)
      GrpcResponse = 'threat_found'
    }

    return { status: GrpcResponse };
  }
}
