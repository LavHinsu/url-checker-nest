import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:50051',
        package: 'urlchecker',
        protoPath: join(__dirname, '../../protofiles/urlchecker.proto'),
        loader: { keepCase: true },
      },
    },
  );
  app.listen();
}
bootstrap();
