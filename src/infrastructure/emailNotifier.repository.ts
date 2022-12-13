// import nodemailer from 'nodemailer';
import Order from '../core/entities/Order';
import NotifierRepository from '../core/interfaces/notifier.repository';

class EmailNotifier implements NotifierRepository {
  public async notify(order: Order): Promise<any> {
    // const mailer = this.getMailer();
    // const mailOptions = {
    //   from: '"Geekshub Bus 🚍"',
    //   to: email,
    //   subject: `Tu billete para ${ticket.tripName}`,
    //   text: 'Tu billete!!',
    // };
    // return mailer.sendMail(mailOptions);
    return Promise<true>
  }

  private getMailer() {
    // return nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });
  }
}

export default EmailNotifier;
