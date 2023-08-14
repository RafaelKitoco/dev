import { Injectable } from "@nestjs/common";
import {MailerService} from '@nestjs-modules/mailer'

@Injectable({})

export class EmailService{
    constructor (private readonly mailerService: MailerService){}
    sendMail(body:any){
        this.mailerService.sendMail({
            to:"comercial@fluxo-digital.com",

          from:`${body.email}`,
          subject:`Inscrição para o Bootcamp`,
          text:"Bem Vindo",
           html:`Nome:${body.nome} <br> Contacto: ${body.contacto} <br> Data de nascimento: ${body.data} <br> <hr> <h2>experiência sobre desenvolvimento</h2> ${body.experiencia} <br> <hr> <h2>expectativa sobre o curso</h2> ${body.expectativa}`
      
    })
        return {message : 'email enviado'}
    }
}