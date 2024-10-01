import { Component } from '@angular/core';
import { Carro } from '../../models/Carro';
import { CarroService } from '../../service/carro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrigido "styleUrl" para "styleUrls"
})
export class HomeComponent {
  // Objeto do tipo Carro
  carro = new Carro();

  // Variável para visibilidade dos botões
  bntCadastro: boolean = true;
  tabelaCadastro: boolean = true;

  // Variável de visibilidade da tabela
  tabela: boolean = true;

  // JSON de Carros
  carros: Carro[] = [];

  // Construtor
  constructor(private servico: CarroService) {}

  // Método de seleção
  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.carros = retorno);
  }

  // Método de cadastro
  cadastrar(): void {
    this.servico.cadastrar(this.carro).subscribe(retorno => {
      // Cadastrar o Carro no vetor  
      this.carros.push(retorno); 

      // Limpar formulário
      this.carro = new Carro();

      // Mensagem
      alert('Carro cadastrado com sucesso!');
    });
  }

  // Método para selecionar um Carro específico
  selecionarCarro(c: Carro): void {
    // Selecionar Carro no vetor
    this.carro = c;

    // Visibilidade dos botões
    this.bntCadastro = false;
    this.tabelaCadastro = false;

    // Visibilidade da tabela
    this.tabela = false;
  }

  // Método para editar Carro
  editar(): void {
    this.servico.editar(this.carro).subscribe(retorno => {
      // Obter posição do vetor onde está o Carro
      let posicao = this.carros.findIndex(obj => obj.id === retorno.id);
      
      // Alterar os dados do Carro no vetor
      this.carros[posicao] = retorno;

      // Limpar formulário
      this.carro = new Carro();

      // Visibilidade dos botões
      this.bntCadastro = true;
      this.tabela = true; 
      this.tabelaCadastro = true;

      alert('Carro alterado com sucesso!');
    });
  }
  
  // Método para remover Carro
  remover(): void {
    this.servico.remover(this.carro.id).subscribe(retorno => {
      // Obter posição do vetor onde está o Carro
      let posicao = this.carros.findIndex(obj => obj.id === this.carro.id);
      
      // Remover Carro do vetor
      this.carros.splice(posicao, 1);

      // Limpar formulário
      this.carro = new Carro();

      // Visibilidade dos botões
      this.bntCadastro = true;
      this.tabela = true; 
      this.tabelaCadastro = true;

      alert('Carro removido com sucesso!');
    });
  }

  // Método para cancelar
  cancelar(): void {
    // Limpar formulário
    this.carro = new Carro();

    // Visibilidade dos botões
    this.bntCadastro = true;
    this.tabela = true;
    this.tabelaCadastro = true;
  }

  // Método de inicialização
  ngOnInit() {
    this.selecionar();
  }
}
