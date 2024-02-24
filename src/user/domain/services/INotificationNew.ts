import { User } from "../entities/User";
export interface INotificationNewProduct{
    sendNotification(user: User): Promise<boolean> ;
}