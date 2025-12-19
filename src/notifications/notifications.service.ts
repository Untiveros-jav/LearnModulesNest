import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
    private notification = [
        { id: 1, message: 'Notificación 1' },
        { id: 2, message: 'Notificación 2' },
        { id: 3, message: 'Notificación 3' },
    ]
    getNotifications() {
        return this.notification;
    }
}
