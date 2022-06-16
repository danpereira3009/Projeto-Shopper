import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors() //ativa quando tem app JS
  await app.listen(3001); //escutar a porta 3001
}
bootstrap();

//configuração do servidor