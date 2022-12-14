import Order from '../core/entities/Order';
import NotifierRepository from '../core/interfaces/notifier.repository';
const nodemailer = require('nodemailer');

class EmailNotifier implements NotifierRepository {
  
  public async notify(order: Order): Promise<any> {
    const mailer = this.getMailer();
    const message = {
      from: 'confirmaciones@correo.com',
      to: order.user.email,
      subject: `Pedido ${order.orderId} de ${order.user.name} confirmado`,
      text: `${JSON.stringify(order, null, 2)}`,
    };

    return mailer.sendMail(message);
  }

  private getMailer() {
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
}

export default EmailNotifier;
