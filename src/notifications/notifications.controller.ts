import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {

    constructor(private notificationsService: NotificationsService) { }

    @Get('/noti')
    getNotificar() {
        return this.notificationsService.getNotifications();
    }
}