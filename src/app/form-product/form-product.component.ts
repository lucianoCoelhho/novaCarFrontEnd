import { Component } from '@angular/core';
import { Carro } from '../models/Carro';
import { CarroService } from '../service/carro.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {

  //objeto do tipo Carro
  carro = new Carro();

  //varialvel para visibilidade dos botoes
  bntCadastro:boolean = true;

  //variavel de visibilidade da tabela
  tabela:boolean = true;

  //JSON de Carros
  carros:Carro[] = [];

  //construtor kkk
  constructor(private servico:CarroService){}

  //metodo de selecao
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.carros = retorno);
  }

  //metodo de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.carro)
    .subscribe(retorno => { 
      
    //cadastrar o Carro no vetor  
    this.carros.push(retorno); 
  
    //limpar formulario
    this.carro = new Carro();

    //mensagem
    alert('Carro cadastrado com sucesso!');
    });
  }

  //metodo para selecionar um Carro especifico
  selecionarCarro(posicao:number):void{

    //selecionar Carro  no vetor
    this.carro = this.carros[posicao];

    //visibilidade dos botoes
    this.bntCadastro = false;

    //visibilidade da tabela
    this.tabela = false;
  }

  //metodo para editar Carro
  editar(): void {
    
    this.servico.editar(this.carro)
    .subscribe(retorno => {

      //obter posicao do vetor onde esta o Carro
      let posicao = this.carros.findIndex(obj => {
        return obj.id == retorno.id;
      
      });
      
      //alterar os dados do Carro no vetor
      this.carros[posicao] = retorno;

      //limpar formulario
      this.carro = new Carro();

      //visibilidade dos botoes
      this.bntCadastro = true;

      //visibilidade da tabela
      this.tabela = true; 

      alert('Carro alterado com sucesso!');

    },
    );
  }

  //metodo para remover Carro
  remover(): void {
    
    this.servico.remover(this.carro.id)
    .subscribe(retorno => {

      //obter posicao do vetor onde esta o Carro
      let posicao = this.carros.findIndex(obj => {
        return obj.id == this.carro.id;
      
      });
      
      //remover Carro do vetor
      this.carros.splice(posicao, 1)

      //limpar formulario
      this.carro = new Carro();

      //visibilidade dos botoes
      this.bntCadastro = true;

      //visibilidade da tabela
      this.tabela = true; 

      alert('Carro removido com sucesso!');

    },
    );
  }

  //metodo para cancelar
  cancelar():void{

    //limpar formulario
    this.carro = new Carro();

    //visibilidade dos botoes
    this.bntCadastro = true;

    //visibilidade da tabela
    this.tabela = true;

  }

  //metodo de inicializacao
  ngOnInit(){
    this.selecionar();
  }


}
