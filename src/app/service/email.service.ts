import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Email } from '../models/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  //URL da API
  private url:string = 'http://localhost:8080/email/';

  constructor(private http:HttpClient) { }

  //metodo para cadastrar clientes
  registrar(obj:Email):Observable<Email>{
    return this.http.post<Email>(this.url, obj)
  }

}
