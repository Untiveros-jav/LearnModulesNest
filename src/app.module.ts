import { Module } from '@nestjs/common';
import { TaskModule } from "./task/task.module";
import { NotificationsModule } from './notifications/notifications.module';
import { AppController } from './app.controller';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [TaskModule, NotificationsModule, VentasModule],
  controllers: [AppController],
})
export class AppModule {}
