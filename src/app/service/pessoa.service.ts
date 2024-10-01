import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //URL da API
  private url:string = 'http://localhost:8080/pessoa';

  constructor(private http:HttpClient) { }

  //metodo para selecionar todos os Pessoas
  selecionar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  //metodo para cadastrar clientes
  cadastrar(obj:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url, obj)
  }

  //metodo para editar Pessoas
  editar(obj:Pessoa):Observable<Pessoa>{
    return this.http.put<Pessoa>(this.url, obj)
  }

  // metodo para remover Pessoas
  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }
}
