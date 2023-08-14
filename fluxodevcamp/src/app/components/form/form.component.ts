import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form! : FormGroup
  constructor(private authService: ServiceService){
    this.form = new FormGroup({
      nome : new FormControl("", [Validators.required]),
      email : new FormControl("",[Validators.required, Validators.email]),
      contacto : new FormControl("",[Validators.required]),
      morada : new FormControl("",[Validators.required]),
      data : new FormControl("", [Validators.required]),
      experiencia : new FormControl("", [Validators.required]),
      expectativa : new FormControl("", [Validators.required])
    })
  }

  get nome(){
    return this.form.get("nome")!;
  }

  get email(){
    return this.form.get("email")!;
  }

  get contacto(){
    return this.form.get("contacto")!;
  }

  get data(){
    return this.form.get("data")!;
  }

  get morada(){
    return this.form.get("morada")!;
  }

  get experiencia(){
    return this.form.get("experiencia")!;
  }

  get expectativa(){
    return this.form.get("expectativa")!;
  }

  async Submeter(){
    if (this.form.invalid) return;
    console.log(this.form.getRawValue())
    await this.authService.EnviarEmail(this.form.getRawValue()).subscribe(
      (e:any)=>{
        alert("o email enviado com sucesso!")
      }
    )
  }
}
