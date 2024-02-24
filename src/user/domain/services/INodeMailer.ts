export interface INodeMailer {
    sendMail(email: string, name: string): Promise<boolean>;
}