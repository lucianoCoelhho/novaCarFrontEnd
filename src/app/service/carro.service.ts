import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../models/Carro';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarroService {

  //URL da API
  private url:string = 'http://localhost:8080/carro';

  constructor(private http:HttpClient) { }

  //metodo para selecionar todos os Carros
  selecionar():Observable<Carro[]>{
    return this.http.get<Carro[]>(this.url);
  }

  //metodo para cadastrar clientes
  cadastrar(obj:Carro):Observable<Carro>{
    return this.http.post<Carro>(this.url, obj)
  }

  //metodo para editar Carros
  editar(obj:Carro):Observable<Carro>{
    return this.http.put<Carro>(this.url, obj)
  }

  // metodo para remover Carros
  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }
}
