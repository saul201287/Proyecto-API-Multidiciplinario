import { NodeMailer } from "../../domain/services/NodeMailer";

export class NodeMailerService {
  constructor(readonly nodeMailer: NodeMailer) {}
  async run(email: string, name: string): Promise<boolean> {
    try {
      const notification = await this.nodeMailer.sendMail(email, name);
      if (notification) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
