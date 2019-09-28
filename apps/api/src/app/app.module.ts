import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { environment } from '../environments/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.db,
      type: 'mysql',
      entities: []
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
