import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ColumnsModule } from './columns/columns.module';

@Module({
  imports: [UsersModule, ColumnsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
