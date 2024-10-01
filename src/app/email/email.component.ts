import { Component } from '@angular/core';
import { Email } from '../models/Email';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  email = new Email;

  // JSON de Carros
  emails: Email[] = [];
      
  // Construtor
  constructor(private servico: EmailService) {}
    
  // Método de cadastro
  cadastrar(): void {
    this.servico.registrar(this.email).subscribe(retorno => {
      // Cadastrar o Carro no vetor  
      this.emails.push(retorno); 

      // Limpar formulário
      this.email = new Email();

      // Mensagem
      alert('Pessoa Registrada com sucesso!');
    });
  }
}
