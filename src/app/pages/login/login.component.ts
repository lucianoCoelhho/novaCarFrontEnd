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

    pessoas: Pessoa[] = [];
      
    constructor(private servico: PessoaService) {}
      
    cadastrar(): void {
      this.servico.cadastrar(this.pessoa).subscribe(retorno => {
        this.pessoas.push(retorno); 

        this.pessoa = new Pessoa();

        alert('Pessoa cadastrada com sucesso!');
      });
    }
}
