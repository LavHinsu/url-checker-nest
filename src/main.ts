
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'urlchecker',
    protoPath: join(__dirname, '../UrlChecker/urlchecker.proto'),
    loader: { keepCase: true },
  },
  
});
app.listen()
}
bootstrap();