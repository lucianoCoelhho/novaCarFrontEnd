import { Component } from '@angular/core';
import { Pessoa } from '../../models/Pessoa';
import { PessoaService } from '../../service/pessoa.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    pessoa = new Pessoa;

    // JSON de Carros
    pessoas: Pessoa[] = [];
      
    // Construtor
    constructor(private servico: PessoaService) {}
      
    // Método de cadastro
    cadastrar(): void {
      this.servico.cadastrar(this.pessoa).subscribe(retorno => {
        // Cadastrar o Carro no vetor  
        this.pessoas.push(retorno); 

        // Limpar formulário
        this.pessoa = new Pessoa();

        // Mensagem
        alert('Pessoa cadastrada com sucesso!');
      });
    }
}
