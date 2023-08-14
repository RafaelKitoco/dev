import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { EmailService } from "./email.service";


@Controller('emailsend/')

export class EmailController{
    constructor(private readonly emailContactoService: EmailService) {}

  @Post()
  EnviarEmail(@Body() body:{nome:string, email:string, contacto:string, data:string, experiencia:string, expectativa:string}){
    return this.emailContactoService.sendMail(body)
  }

}
    