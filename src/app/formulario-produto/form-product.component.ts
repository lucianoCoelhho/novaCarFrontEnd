import { Component } from '@angular/core';
import { Carro } from '../models/Carro';
import { CarroService } from '../service/carro.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {

  carro = new Carro();

  bntCadastro:boolean = true;

  tabela:boolean = true;

  carros:Carro[] = [];

  constructor(private servico:CarroService){}

  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.carros = retorno);
  }

  cadastrar():void{
    this.servico.cadastrar(this.carro)
    .subscribe(retorno => { 
      
    this.carros.push(retorno); 
  
    this.carro = new Carro();

    alert('Carro cadastrado com sucesso!');
    });
  }

  selecionarCarro(posicao:number):void{

    this.carro = this.carros[posicao];

    this.bntCadastro = false;

    this.tabela = false;
  }

  editar(): void {
    
    this.servico.editar(this.carro)
    .subscribe(retorno => {

      let posicao = this.carros.findIndex(obj => {
        return obj.id == retorno.id;
      
      });
      
      this.carros[posicao] = retorno;

      this.carro = new Carro();

      this.bntCadastro = true;

      this.tabela = true; 

      alert('Carro alterado com sucesso!');

    },
    );
  }

  remover(): void {
    
    this.servico.remover(this.carro.id)
    .subscribe(retorno => {

      let posicao = this.carros.findIndex(obj => {
        return obj.id == this.carro.id;
      
      });
      
      this.carros.splice(posicao, 1)

      this.carro = new Carro();

      this.bntCadastro = true;

      this.tabela = true; 

      alert('Carro removido com sucesso!');

    },
    );
  }

  cancelar():void{

    this.carro = new Carro();

    this.bntCadastro = true;

    this.tabela = true;

  }

  ngOnInit(){
    this.selecionar();
  }

}
