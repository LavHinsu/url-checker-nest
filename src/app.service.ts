// import { Metadata } from '@grpc/grpc-js';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  async checkUrlStatus(data: RequestData): Promise<ReturnValue> {
    const formdata = new FormData();
    formdata.append('url', data.url);

    const requestOptions: RequestInit = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://urlhaus-api.abuse.ch/v1/url/', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    Logger.debug('requested to check url: ' + data.url);
    return { status: data.url };
  }
}
