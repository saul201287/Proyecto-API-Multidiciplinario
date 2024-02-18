export interface NodeMailer {
    sendMail(email: string, name: string): Promise<boolean>;
}