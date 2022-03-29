import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  buscarListaUsuarios(url: string) {
    return this.http.get(url);
  }

  buscarDadosUsuarios(url: string){
    return this.http.get(url);
  }
}
