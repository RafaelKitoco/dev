import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule} from '@nestjs-modules/mailer'


@Module({
    imports:[MailerModule.forRoot({
        transport:{
          host:"mail.fluxo-digital.com",
          auth:{
            user:"comercial@fluxo-digital.com",
            pass:"fluxodigital#23",
          },
          port:465
        }
      })],

    providers:[EmailService],
    controllers:[EmailController]
})
export class EmailModule {}
