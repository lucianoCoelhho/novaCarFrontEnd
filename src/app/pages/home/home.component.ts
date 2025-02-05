import { Component } from '@angular/core';
import { Carro } from '../../models/Carro';
import { CarroService } from '../../service/carro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  carro = new Carro();

  bntCadastro: boolean = true;
  tabelaCadastro: boolean = true;

  tabela: boolean = true;

  carros: Carro[] = [];

  constructor(private servico: CarroService) {}

  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.carros = retorno);
  }

  cadastrar(): void {
    this.servico.cadastrar(this.carro).subscribe(retorno => {
      this.carros.push(retorno); 

      this.carro = new Carro();

      alert('Carro cadastrado com sucesso!');
    });
  }

  selecionarCarro(c: Carro): void {
    this.carro = c;

    this.bntCadastro = false;
    this.tabelaCadastro = false;

    this.tabela = false;
  }

  editar(): void {
    this.servico.editar(this.carro).subscribe(retorno => {
      let posicao = this.carros.findIndex(obj => obj.id === retorno.id);
      
      this.carros[posicao] = retorno;

      this.carro = new Carro();

      this.bntCadastro = true;
      this.tabela = true; 
      this.tabelaCadastro = true;

      alert('Carro alterado com sucesso!');
    });
  }
  
  remover(): void {
    this.servico.remover(this.carro.id).subscribe(retorno => {
      let posicao = this.carros.findIndex(obj => obj.id === this.carro.id);
      
      this.carros.splice(posicao, 1);

      this.carro = new Carro();

      this.bntCadastro = true;
      this.tabela = true; 
      this.tabelaCadastro = true;

      alert('Carro removido com sucesso!');
    });
  }

  cancelar(): void {
    this.carro = new Carro();

    this.bntCadastro = true;
    this.tabela = true;
    this.tabelaCadastro = true;
  }

  ngOnInit() {
    this.selecionar();
  }
}
