import { mailResetPasswordOptions, mailVerivicationOptions } from "../config/constants/mail";
import transport from "../config/smtp";

class MailService {
  sendMail = async (to: string, subject: string, html: string) => {
    try {
      await transport.sendMail({
        from: "moviesimple12@gmail.com",
        to: to,
        subject: subject,
        html: html,
      });
    } catch (error) {
      throw error;
    }
  };

  sendVerificationCode = async (to: string, code: string) => {
    try {
      await transport.sendMail(mailVerivicationOptions(to, code));
    } catch (error) {
      throw error;
    }
  };

  sendResetPasswordCode = async (to: string, code: string) => {
    try {
      await transport.sendMail(mailResetPasswordOptions(to, code));
    } catch (error) {
      throw error;
    }
  };
}

export default new MailService();
